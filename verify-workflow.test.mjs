import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const workflow = readFileSync(new URL('./.github/workflows/verify.yml', import.meta.url), 'utf8');

test('NightShaman main remains a verified, directly importable development artifact', () => {
  assert.match(workflow, /push:\s*\n\s+branches: \[main\]/);
  assert.match(workflow, /find \. -name SKILL\.md -type f -size \+0c/);
  assert.doesNotMatch(workflow, /gh release create|git tag|contents: write/);
});
