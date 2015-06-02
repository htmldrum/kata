describe('General questions', function () {

    it('Find the most frequent integer in an array.', function(){

        var foo = [1,2,4,4,2];
        var fn = function(a){
            var seen = {};
            var most_frequent = a[0];

            a.forEach(function(i){
                if(typeof seen[i] == 'undefined'){
                    seen[i] = 0;
                }
                seen[i]+=1;
                if(seen[i] > seen[most_frequent]){
                    most_frequent = i;
                }
            });
            
            return most_frequent;
        };

        expect(fn(foo)).toEqual(4);

    });

    // TODO: Linear time.
    it('Find pairs in an integery array whose sum is equal to 10 (bonus: do it in linear time.', function(){
        
        var foo = [-2,0,1,2,4,6,8,9,10,12];
        var fn = function(a){
            var i = 0;
            var pairs = [];
            var paired = {}

            a.forEach(function(i, ndxi){
                a.forEach(function(j, ndxj){
                    // Match if they add to 10
                    // AND if haven't been paired with eachother
                    // This works as integers are independent (no pair
                    // will be used twice)
                    if(i+j == 10 && ( paired[ndxi] !== true && paired[ndxj] !== true )){
                        // Add pairs to results array
                        pairs.push([i,j]);

                        // Keep track of matched indices
                        paired[ndxi] = true;
                        paired[ndxj] = true;
                    }
                });
            });

            return pairs.slice(0);
        };

        expect(fn(foo).length).toEqual(5);

    });

    it('Given 2 integer arrays, determine iff the 2nd array is a rotated version of the 1st array.', function(){

        var foo = [1,2,3,5,6,7,8];
        var bar = [5,6,7,8,1,2,3];
        var baz = [5,6,7,8,1,2,4];

        var fn = function(a,b){
            var tmp;
            var i,j;
            var match = false;

            // Compute the array rotations
            for(i=0;i<a.length && match == false;i++){
                tmp = a.slice(a.length-i).concat(a.slice(0,i));
                // Itterate over rotated array
                // If match, continue until end of array
                for(j=0;j<b.length && match == false;j++){
                    if(tmp[j] == b[j]){
                        if(j==(b.length-1)){ // If j == b.length-1, we've 
                                             // finished
                            match = true;
                        }
                    } else {
                        j = b.length; // Exit early
                    }
                }
            }

            return match;

        }

        expect(fn(foo,bar)).toEqual(true);
        expect(fn(foo,baz)).toEqual(false);

    });

    it('Write fibbonaci iteratively', function(){
        var fn = function(n){

            var i;
            var fib = [];

            for(i=0;i<n;i++){
                if(i < 2){
                    fib.push(1);
                } else {
                    fib.push(parseInt(fib.slice(-1))+parseInt(fib.slice(-2,-1)));
                }
            }

            return fib.slice(0);

        };

        expect(fn(0)).toEqual([]);
        expect(fn(1)).toEqual([1]);
        expect(fn(2)).toEqual([1,1]);
        expect(fn(5)).toEqual([1,1,2,3,5]);
        expect(fn(10)).toEqual([1,1,2,3,5,8,13,21,34,55]);

    });

    it('Write fibbonaci recursively', function(){

        var fn = function(n,fib){
            if(typeof fib === 'undefined'){
                fib = [];
                return fn(n,fib);
            } else {
                if(fib.length < n){
                    if(fib.length < 2){
                        fib.push(1);
                    } else {
                        fib.push(parseInt(fib.slice(-1))+parseInt(fib.slice(-2,-1)));
                    }
                        return fn(n,fib);
                } else {
                    return fib;
                }
            }
        };

        expect(fn(0)).toEqual([]);
        expect(fn(1)).toEqual([1]);
        expect(fn(2)).toEqual([1,1]);
        expect(fn(5)).toEqual([1,1,2,3,5]);
        expect(fn(10)).toEqual([1,1,2,3,5,8,13,21,34,55]);

    });

    it('Find the only element in an array that only occurs once', function(){

        var foo = [1,1,2,3,3,4,4];
        var bar = [1,1,2,3,4,4];

        var fn = function(a){

            var uniq;
            var curr;
            var i,j;

            for(i=0;i<a.length;i++){
                curr = a[i];
                for(j=0;j<a.length && typeof curr !== 'undefined';j++){
                    // Skip 
                    if(i!=j){
                        if(a[i]==a[j]){
                            curr = undefined;
                        }                            
                    }
                }
                if(typeof curr !== 'undefined'){
                    if(typeof uniq === 'undefined'){
                        uniq = curr;
                    } else {
                        throw "Multiple single instances detected: " + uniq + ", " + curr;
                    }
                }
            }

            return uniq;

        };

        expect(fn(foo)).toEqual(2);
        //expect(fn(bar)).toThrow();
        
    });

    // Set union
    it('Find the common elements of 2 int arrays', function(){

        var foo = [1,2,3,4,5,10,9,8];
        var bar = [5,4,-3,2,1];
        var fn = function(a,b){
            var longer = ( a.length > b.length ) ? a.slice(0) : b.slice(0);
            var shorter = ( a.length < b.length ) ? a.slice(0) : b.slice(0);
            var union = [];

            longer.forEach(function(i){
                shorter.forEach(function(j){
                    if(i==j){
                        union.push(i);
                    }
                });
            });

            return union.slice(0);
            
        };

        expect(fn(foo,bar).length).toEqual(4);

    });

    it('Implement binary search of a sorted array of integers', function(){
        var foo = 5;
        var foz = -1;
        var bar = [1,2,3,4,5];
        var baz = [1,2,5,40,53];
        
        var fn = function(needle,haystack,min,max){

            var mid = Math.floor((max+min)/2);

            if(typeof min === 'undefined'){
                return fn(needle,haystack,0,haystack.length-1);
            } else if(max < min){
                return false;
            } else {
                if(needle > haystack[mid]){
                    return fn(needle,haystack,(mid+1),max);
                } else if(needle < haystack[mid]){
                    return fn(needle,haystack,min,(mid-1));
                } else {
                   return mid;
                }
            }
        };
        

        expect(fn(foo,bar)).toEqual(4);
        expect(fn(foo,baz)).toEqual(2);        
        expect(fn(foz,bar)).toEqual(false);

    });


    it('Implement binary search in a rotated array (ex. {5,6,7,8,1,2,3})',function(){});
   
    it('write a prime_number checker', function(){
        
        function is_prime(x){
            
            var div;

            if(x%2 === 0){
                return false;
            }

            for(div=3;div < Math.ceil(Math.sqrt(x));div+=2){
                if(x % div === 0){
                    return false;
                }
            }

            return true;

        }

        expect(is_prime(14)).toEqual(false);
        expect(is_prime(3537)).toEqual(false);
        expect(is_prime(3571)).toEqual(true);

    });

    // N.B - Ugly as it lacks the memory hacks of lower languages but sieve of eratosthenes
    it('Use dynamic programming to find the first X prime numbers', function(){

        function first_x_primes(x){
        
            var primes = [false,false];
            var res = [];
            var i,j;
            
            if(x==0 || x==1){

                return [1,2].slice(0,x);

            } else {
                
                // Initializing array
                for(i=2;i<x;i++){
                    primes.push(true);
                }

                for(i=2;i<Math.ceil(Math.sqrt(x));i++){
                    if(primes[i]){
                        for(j=i*i;j<x;j+=i){
                            primes[j] = false;
                        }
                    }
                }

                for(i=2;i<x;i++){
                    if(primes[i]){
                        res.push(i);
                    }
                }

            }
        
            return res.slice(0);
        
        }

        function is_prime(x){
            
            var div;

            if(x%2 === 0){
                return false;
            }

            for(div=3;div < Math.ceil(Math.sqrt(x));div+=2){
                if(x % div === 0){
                    return false;
                }
            }

            return true;

        }

        expect(first_x_primes(30)).toEqual([2,3,5,7,11,13,17,19,23,29]);

    });

    it('Write a function that prints out the binary form of an int', function(){});

    it('Implement parseInt', function(){

        var foo = '17191';
        var fn = function(str){

            var acc = 0, i;
         
            for(i=0;i<str.length;i++){
                acc = acc * 10 + (str[i] - '0');
            }

            return acc;

        };

        expect(fn(foo)).toEqual(parseInt(foo));


    });

    it('Implement squareroot function', function(){

        var foo = 9*9;
        var baz = 699*699;

        var fn = function(n){
            
            var i = 0;

            while(i*i != n){
                i++;
            }

            return i;

        };

        expect(Math.sqrt(foo)).toEqual(9);
        expect(Math.sqrt(baz)).toEqual(699);

    });

    // TODO: log(n) time
    // http://en.wikipedia.org/wiki/Exponentiation_by_squaring
    it('Implement an exponent function (bonus: now try in log(n) time)', function(){

        function exponential(base,power){
            if(power > 1){
                return base * exponential(base,power-1);
            } else {
                return base;
            }
        }

        expect(exponential(32,8)).toEqual(Math.pow(32,8));

    });

    it('Write a multiply function that multiples 2 integers without using *', function(){
        
        function multi_2(a,b){
            var res = 0;
            while(a > 0){
                res += b;
                a-=1;
            }
            return res;
        }

        expect(multi_2(4,8)).toEqual(4*8);

    });

    it('HARD: Given a function rand5() that returns a random int between 0 and 5, implement rand7()', function(){});

    it('HARD: Given a 2D array of 1s and 0s, count the number of "islands of 1s" (e.g. groups of connecting 1s)', function(){});

    it('atoi', function(){

        function _atoi(str){

            var i, acc=0, tmp = str.slice(0);

            for(i=0;i<str.length;i++){
                acc = acc * 10 + (str[i] - '0')
            }

            return acc;
            
        }

        expect(_atoi("17199")).toEqual(17199);
    });

    it('itoa', function(){

        function _itoa(int){
            var tmp = int, i, acc = '';

            while(tmp > 0){
                acc = (tmp % 10) + acc;
                tmp = (tmp - (tmp % 10))/10
            }

            return acc;
        }

        expect(_itoa(17199)).toEqual("17199");

    });

});
