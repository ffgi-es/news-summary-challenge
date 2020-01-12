describe("Document", function() {
  it("should have a heading", function() {
    let heading = document.getElementsByTagName('h1')[0];
    expect(heading.innerHTML).toEqual("News Summary");
  });
});
