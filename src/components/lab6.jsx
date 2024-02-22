export default function Lab6(){
    //lab6_1
        const eBook = {
            sizeOfScreen: 25.4,
            typeOfScreen: "IPS",
            resolution: "Full HD",
            flashMemmory: 4048,
        }
    

        

        //lab6_2
        const myEBook = new EBook(23.4, "AMALED", "Full HD", 8048);
        myEBook._sizeOfScreen = 22;
        myEBook.displayInfo();

        //lab6_3
        const classEBook = new ClassEbook(21.3, "AVD", "4k", 1024);
        classEBook.sizeOfScreen = 20.3;
        classEBook.displayInfo();

        //Lab6_4
        const  childEBook = new NewestClassEbook(12.3,"IPC", "FULL Hd", 1024, new Date(), 555);
        childEBook.costOfBook = 888;
        childEBook.displayInfo();

        //Lab6_5
        const arrayOfChilds = [
        new NewestClassEbook(15.3,"IPC", "FULL Hd", 1024, new Date(), 666),
        new NewestClassEbook(17.3,"AMALED", "FULL Hd", 2024, new Date(), 555),
        new NewestClassEbook(19.3,"IPC", "4k", 1024, new Date(), 485),
        new NewestClassEbook(16.3,"AMALED", "FULL Hd", 8086, new Date(), 386),
        new NewestClassEbook(13.3,"IPC", "2k", 1024, new Date(), 985),
        new NewestClassEbook(21.3,"OLED", "FULL Hd", 4086, new Date(), 756),
        ]
        
        let min = Infinity;
let max = -Infinity;
let sum = 0;
        arrayOfChilds.forEach(child => {
           
            if (child.costOfBook < min) {
                min = child.costOfBook;
            }
            if (child.costOfBook > max) {
                max = child.costOfBook;
            }
     
            sum += child.costOfBook;
        });


      return(
        <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
            <p>First object E-book</p>
            <pre>{JSON.stringify(eBook,null,2)}</pre>
            <p>Second object E-book</p>
            <pre>{JSON.stringify(myEBook,null,2)}</pre>
            <p>Third class E-book</p>
            <pre>{JSON.stringify(classEBook,null,2)}</pre>
            <p>Child class of E-book</p>
            <pre>{JSON.stringify(childEBook,null,2)}</pre>
            <p>Minimal value of cost: {min}<br/> Max value: {max} <br/> Avarage value: { sum / arrayOfChilds.length}</p>
            <p>Sum of valu: {sum}</p>
            <p>Count of object which more than avarage: {arrayOfChilds.filter((item)=>item.costOfBook > sum/arrayOfChilds.length).length}</p>

            <p>Array of children of E-book</p>
            <div>{arrayOfChilds.map((item, index)=>(
                <pre>{JSON.stringify(item,null,2)}</pre>
            ))}</div>
        </div>
    )
}


//Lab6_2

function EBook(sizeOfScreen, typeOfScreen, resolution, flashMemory) {
    
    this._sizeOfScreen = sizeOfScreen;
    this._typeOfScreen = typeOfScreen;
    this._resolution = resolution;
    this._flashMemory = flashMemory;
   
   

    Object.defineProperty(this, 'sizeOfScreen', {
        get: function() {
            return this._sizeOfScreen;
        },
        set: function(value) {
            this._sizeOfScreen = value;
        }
    });

    Object.defineProperty(this, 'typeOfScreen', {
        get: function() {
            return this._typeOfScreen;
        },
        set: function(value) {
            this._typeOfScreen = value;
        }
    });

    Object.defineProperty(this, 'resolution', {
        get: function() {
            return this._resolution;
        },
        set: function(value) {
            this._resolution = value;
        }
    });

    Object.defineProperty(this, 'flashMemory', {
        get: function() {
            return this._flashMemory;
        },
        set: function(value) {
            this._flashMemory = value;
        }
    });
}

EBook.prototype.displayInfo = function() {
    console.log("Size of Screen: " + this.sizeOfScreen + " inches");
    console.log("Type of Screen: " + this.typeOfScreen);
    console.log("Resolution: " + this.resolution);
    console.log("Flash Memory: " + this.flashMemory + " GB");

};
//Lab6_3
class ClassEbook {
    constructor(sizeOfScreen, typeOfScreen, resolution, flashMemory) {
        this._sizeOfScreen = sizeOfScreen;
        this._typeOfScreen = typeOfScreen;
        this._resolution = resolution;
        this._flashMemory = flashMemory;
        
    }

    // Getters
    get sizeOfScreen() {
        return this._sizeOfScreen;
    }

    get typeOfScreen() {
        return this._typeOfScreen;
    }

    get resolution() {
        return this._resolution;
    }

    get flashMemory() {
        return this._flashMemory;
    }

   

    // Setters
    set sizeOfScreen(value) {
        this._sizeOfScreen = value;
    }

    set typeOfScreen(value) {
        this._typeOfScreen = value;
    }

    set resolution(value) {
        this._resolution = value;
    }

    set flashMemory(value) {
        this._flashMemory = value;
    }

    
    displayInfo() {
        console.log(`Size of Screen: ${this.sizeOfScreen} inches`);
        console.log(`Type of Screen: ${this.typeOfScreen}`);
        console.log(`Resolution: ${this.resolution}`);
        console.log(`Flash Memory: ${this.flashMemory} GB`);
        
    }
}

class NewestClassEbook extends ClassEbook{
    constructor(sizeOfScreen, typeOfScreen, resolution, flashMemory,releaseDate,costOfBook) {
        super(sizeOfScreen,typeOfScreen,resolution,flashMemory);
        this._releaseDate = releaseDate;
        this._costOfBook = costOfBook

        
    }

    get releaseDate() {
        return this._releaseDate;
    }
    get costOfBook() {
        return this._costOfBook;
    }
    set releaseDate(newDate) {
         this._releaseDate = newDate;
    }
    set costOfBook(costOfBook) {
        this._costOfBook = costOfBook;
    }

    displayInfo() {
        super.displayInfo(); 
        console.log(`Released Date: ${this._releaseDate}`);
        console.log(`Cost of the Book: ${this._costOfBook}`);
    }
}