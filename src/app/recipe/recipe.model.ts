//Creating the model for the recipe class for each recipe item

export class Recipe{
    public name :string;
    public description :string;
    public imagePath :string;

    constructor(name: string, desc: string , imagePath: string){
     this.name= name;
     this.description =desc;
     this.imagePath = imagePath;
    }

}