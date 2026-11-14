# Test checklist

Open each file in GitKit and check:

**code/** sample.py, sample.js, sample.rs, Dockerfile, config.yml are coloured with line numbers; notes.txt has numbers only. Click Edit: plain textarea. Cancel: coloured again. Press Ctrl+F: find bar works.

**html-demo/index.html** Preview shows purple heading, logo image, working button (Run scripts on). Untick Run scripts: button stops working. Code tab shows the source. The in-page link scrolls; the relative link does nothing.

**data/people.csv** Click headers to sort (age sorts numerically). Type "ana" in the filter. Untick Header row. Row 2 has a multi-line cell.
**data/big.csv** 1500 rows: shows 500 then a "Show more" button.
**data/products.tsv, semicolon.csv** auto-detected delimiters.
**data/config.json** Tree view; search "needle"; Expand all / Collapse all; click "… +N chars" on long_text. **events.jsonl** 3 records. **places.geojson** tree. **broken.json** shows "Not valid JSON" with the Source tab.
**data/changes.patch** green/red lines, line numbers, 2 files, +4 −1.

**diagrams/** flow.mmd and classes.mmd render; Source tab shows the text.
**README.md** math renders, "$5 and $10" stays text, 2 diagrams, highlighted code, the last broken diagram shows a red error box.
**notebooks/test.ipynb** math in the first cell, highlighted code, the table renders, no alert pops up, the error cell shows.

**media/** tone.mp3, tone.wav, tone.ogg play in an audio player; clip.mp4, clip.webm play in a video player.
**binary/sample.bin** hex viewer: offsets, bytes, ASCII column; "Go to offset" accepts 0x100.
