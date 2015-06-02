describe('Strings', function(){

    it('Find the first non-repeated character in a String', function(){
    
        var foo = 'Nicholas Cage is a nice guy';
        var bar = 'aaaaaaaay';

        function fn(str){
            // Itterate over string, keeping track of current char
            // Normalize current_char
            // When a pair is found, exit
            // If end, return
            // If end of string, false

            var i,j,curr;
            for(i=0;i < str.length;i++){
                curr = str[i].slice(0).toLowerCase();
                for(j=0;j < str.length && typeof curr !== 'undefined';j++){
                    if(i!=j){
                        if(curr === str[j].toLowerCase()){
                            curr = undefined;
                        }
                    }
                }
                if(typeof curr !== 'undefined'){
                    return curr;
                }
            }

            return false;

        };

        expect(fn(foo)).toEqual('h');
        expect(fn(bar)).toEqual('y');

    });

    it('Reverse a String iteratively and recursively', function(){

        var foo = 'carol channing';

        function rev_r(str){

            if(str.length == 0){
                return '';
            } else {
                return str[str.length-1] + rev_r(str.slice(0,str.length-1));
            }

        }

        function rev_i(str){
            var i, acc = '';
            for(i=str.length-1;i>=0;i--){
                acc += str[i];
            }
            return acc.slice(0);
        }

        expect(rev_r(foo)).toEqual('gninnahc lorac');
        expect(rev_i(foo)).toEqual('gninnahc lorac');

    });

    it('Determine if 2 Strings are anagrams', function(){
        
        var foo = "bob katter";
        var bar = "tart kebob";
        var baz = "tart keboz";

        function fn(str1,str2){

            var s1 = {};
            var s2 = {}
            var i;


            if(str1.length !== str2.length){
                return false;
            } else {
                for(i=0;i < str1.length;i++){
                    s1[str1[i].toLowerCase()] = (typeof s1[str1[i].toLowerCase()] === 'undefined') ? 1 : (s1[str1[i].toLowerCase()] + 1);
                    s2[str2[i].toLowerCase()] = (typeof s2[str2[i].toLowerCase()] === 'undefined') ? 1 : (s2[str2[i].toLowerCase()] + 1);
                }

                for(i=0;i < str1.length;i++){
                    if(s1[str1[i].toLowerCase()] !== s2[str1[i].toLowerCase()] ){
                        return false;
                    }
                }
            }

            return true;

        };

        expect(fn(foo,bar)).toEqual(true);
        expect(fn(foo,baz)).toEqual(false);

    });

    it('Check if String is a palindrome', function(){

        function is_palindrome(str){

            var x;

            for(x=0;x<Math.floor(str.length/2);x++){
                if(str[x] !== str[str.length-1-x]){
                    return false;
                }
            }

            return true;

        };

        expect(is_palindrome("kayak")).toEqual(true);
        expect(is_palindrome("kaak")).toEqual(true);
        expect(is_palindrome("kazpak")).toEqual(false);

    });

    it('Check if a String is composed of all unique characters', function(){

        function uniq_str(str){
            var memo = {},i;

            for(i=0;i<str.length;i++){
                if(typeof memo[str[i]] !== 'undefined'){
                    return false;
                }
                memo[str[i]] = true;
            }

            return true;

        }

        expect(uniq_str("abcdef")).toEqual(true);
        expect(uniq_str("abcdaf")).toEqual(false);
        
});

    it('Determine if a String is an int or a double', function(){});

    xit('HARD: Find the shortest palindrome in a String', function(){});

    xit('HARD: Print all permutations of a String', function(){
    });

    xit("HARD: Given a single-line text String and a maximum width value, write the function 'String justify(String text, int maxWidth)' that formats the input text using full-justification, i.e., extra spaces on each line are equally distributed between the words; the first word on each line is flushed left and the last word on each line is flushed right", function(){});

});
