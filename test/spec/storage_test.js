describe("storage", function(){
    describe("storage.my_method()", function(){
        it("should return 1", function(done){
            _use('storage@latest', function(exports) {
                expect('my_method' in exports);
                done();
            });
        });
    });
});