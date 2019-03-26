#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require("commander");
const cypress = require('cypress');

program
  .version("0.1.0")
  .command("run")
  .option("-n --nicheCode [nicheCode]", "Niche code")
  .option("-i --includedTags [includedTags]", "Included tags", list)
  .option("-e --includedTags [excludedTags]", "Excluded tags", list)
  .action((cmd) => {
    openCypress({
      nicheCode: cmd.nicheCode,
      tags: createTags(cmd.nicheCode, cmd.includedTags, cmd.excludedTags)
    });
  });

program.parse(process.argv);

function openCypress(props) {
  const runtimeOptions = {
    project: '.',
    record: false,
    env: {
      TAGS: props.tags,
      NICHE_CODE: props.nicheCode,
    },
  };

   console.log(`Running tests for the following cypress config:`, JSON.stringify(runtimeOptions, null, 2));

   cypress.open(runtimeOptions)
    .then(result => console.log(JSON.stringify(result, null, 2)));
}

function createTags(nicheCode, includedTags = [], excludedTags = []) {
  const includedTagsPart = includedTags
    .reduce(combineTagsWithNicheCode, [])
    .join(' or ');

  const excludedTagsPart = excludedTags
    .reduce(combineTagsWithNicheCode, [])
    .map(tag => `NOT ${tag}`)
    .join(' or ');

  return [includedTagsPart, excludedTagsPart]
    .filter(Boolean)
    .map(part => `(${part})`)
    .join(' and ')

  function combineTagsWithNicheCode(acc, tag) {
    acc.push(`@${tag}`, `@${nicheCode}:${tag}`);

    return acc;
  }
}

function list(values = '') {
  return values.split(',').map(value => value.trim());
}
