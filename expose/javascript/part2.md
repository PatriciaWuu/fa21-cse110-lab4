1. It will print 3 in an HTML-like tree,which is i's value becaures i was declared as var, which could be accessed in entire discounrPrices function where it was declared
2. It will print 150 in an HTML-like tree, which is discountedPrice's value depend on prices[2], becaures i was declared as var, which could be accessed in entire discounrPrices function where it was declared
3. It will print 150 in an HTML-like tree, which is finalPrice's value becaures i was declared as var, which could be accessed in entire discounrPrices function where it was declared
4. The function will return the array of 50,100,150 which is discounted's value, since discounted was created as var array and was push in finalPrice as element in the loop.
5. error, since i was declared as let in loop scope, it is invalid to use it beyong loop scope
6. error, since discountedPrice was declared as let in loop scope, it is invalid to use it beyong loop scope
7. It will print 150 in an HTML-like tree, which is finalPrice value since it was declear as var variable, finalPrice was assign in for loop third times, 150 was it final value.
8. The function will return the array of 50,100,150 which is discounted's value, even if discounted was decleared as let in the call function, the return function keeps the value of it.
9. error, since i was declared as let in loop scope, it is invalid to use it beyong loop scope
10. It will print 3, since length was declare as const and it was only assign once on the function.
11. The function will return the array of 50,100,150 which is discounted's value, when using const to define array, it just defines the constant reference to an array, the elements of const array are still free to changed.
12. A.student.name; B.student['Grad Year']; C.student.greeting(); D.student['Favorite Teacher'].name;E.student.courseload[0];
13. A. '32', since interger 2 map to sring 3; B.2, string '3' convert to number; C.3, + will convert null to 0; D.'3null', + of two string; E.4, true convert to 1 as interfer; F. 0, False convert to 0 as number, so does null; G. '3undefined', + of two string; H. NaN, since undefined will convert to NaN as number
14. A. true, '2' becomes number 2; B. false, since string is compare letter by letter, 2 is larger than 1; C.true, '2' become number 2; D.false since ===check the type of two side, these two are not 1 type; E. false, since number of true is 1; F. true since boolean(2) is true.
15. The difference between == and === is, === check equality without type conversion, and == check with.
17. It will return array of [2,4,6]. First, modifyArray called its function, which doSomething is called callback in modifyArray. Then in modifyArray, doSomething is called wehn callback was call, which double each element of array and push to newArray.
19.It print 1 4 3 2.
