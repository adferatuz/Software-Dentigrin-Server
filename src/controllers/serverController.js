const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send(`<html>
                    <body 
                      style="display: flex; 
                      flex-direction: column; 
                      align-items: center; 
                      justify-content: center; 
                      min-height: 100vh; 
                      margin: 0; padding: 0; 
                      box-sizing: border-box;"
                      >
                        <h2 
                          style="text-align: center; 
                          margin-bottom: 20px;"
                        >
                            SISTEMA DE GESTION DE AGENDAMIENTO, 
                            ACTUALIZACION Y CANCELACION DE CITAS ODONTOLOGICAS                            
                        </h2>
                        <img 
                        src='../../assets/img/logo.jpeg'
                        width='50%' 
                        alt='Dentigrin' 
                        style="box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);"
                        >
                    </body>
                </html>`
              );
  });

  module.exports = router;