// static = keyword that defines properties  or methods that belong to a clas itself rather than the objects
//         created from that class ( class owns anthing static , not the objects)



//important point
//we can call static methods by using class  name without creating objects.
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius)
    {
        return radius *2;
    }
    static getCircumfernce(raduis)
    {
        return 2*this.PI*raduis;
    }
    static getArea(radius)
    {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
//           (classname.property)
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumfernce(10));


class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
       User.userCount++;
    }
}

const user1 = new User("yashwanth");
const user2= new User("patrick");

console.log(user1.username);
console.log(user2.username);

console.log(User.userCount);  // 1
