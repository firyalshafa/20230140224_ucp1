
const { DataTypes } = require("sequelize");


const { sequelize } = require(".");


module.exports = (sequelize, DataTypes) => {

    
    const Film = sequelize.define("Film", {

        
        id: {
            type: DataTypes.INTEGER,    
            autoIncrement: true,         
            primaryKey: true             
        },

        
        Nama_Film: {                         
            type: DataTypes.STRING,      
        },

        
        Description: {
            type: DataTypes.STRING,      
        },

        
        Sutradara: {
            type: DataTypes.STRING       
        },

         tahun_rilis: {
            type: DataTypes.INTEGER
      },
       
         genre:{
             type: DataTypes.STRING
},
 

    });

   
    return Film;                       
};
