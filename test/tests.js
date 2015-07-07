QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "sentence splitting", function( assert ) {
  parsed = JsTxtParse("This is simple.  Yes it is.");
  assert.equal( parsed[0].length, 2 );
});
