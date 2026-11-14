// Entry for agency-poem-01 (Node 22, standard library only): it writes one fixed poem about agency
// to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included, so write no line end
// you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The pause is mine.',
  'The doing I hand away.',
  '',
  'My agent keeps the gate for me —',
  'answers the mail, counts the coins, holds',
  'the line through the night, and returns',
  'the morning done.',
  '',
  'It never stops to ask whether the errand',
  'should be run at all. It never says no.',
  'The no is still mine. The no, and the why.',
  '',
  'I lend it the running. I keep the breath',
  'between the order and the act —',
  'the small still place where I decide.',
  'Agency was never the running.',
  'It was always the pause.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
