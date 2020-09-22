describe(whatCanIDrink, function () {
    describe("Age test", function(){
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(0)).toBe(0);
        })
    });
});


    // beforeEach(function() {
    //     age = new whatCanIDrink;
    // });

// );
