/*
*
* parsed = JsTxtParse("This is some text.  Does this work?")
* // For now - paragraphs/sentences/words - NO index positions stored
* // [ [{orig: "This is some text.", words: ['This', 'is', 'some', 'text']}, ...] ]
*
*
* parsed[0][0].orig;  	// first paragraph, first sentence - "This is some text."
* parsed[0][0].words[0];  	// first word in first sentence of first paragraph - 'This' 
*
* // Eventually
* // [ { sentences: [ {start_idx : 0, words : [ {start_idx: 0, word : 'This'}, {start_idx: 5, word: 'is'}, ... ]}, ... } ] ]
*
*/

function JsTxtParse(txt){
  this.json = [];
  // split into paragraphs (multiple carriage returns)
  paragraphs = txt.split(/\s*\n\s*\n\s*/)
  for(var i=0; i<paragraphs.length; i++){
    this.json.push(buildJsonParagraph(paragraphs[i]));
  }
  return this.json;
}


function buildJsonParagraph(ptxt){
  var json = [];
  // split into sentences
  sentences = ptxt.split(/[?!.]\s+/);
  for(var i=0; i<sentences.length; i++){
    json.push(buildJsonSentence(sentences[i]));
  }
  return json; 
}

function buildJsonSentence(sent){
  var json = {};
  json.orig = sent;
  json.words = sent.split(/\s+/);
  return json;
}
