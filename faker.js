import { faker } from '@faker-js/faker'
import fs from 'fs';

function fakeNames(Numberoftimes){
  let string = ""
    for(let i=0; i< Numberoftimes; i++){
      string += (faker.name.firstName() + "\n")
    }
  return string
}

const names = fakeNames(1000)

fs.writeFile("names.txt", names, err => {
    if (err) {
      console.error(err);
    }
  });

  try {
    console.log('El proceso a terminado satisfactoiamente')
    
  } catch (er) {
    console.log(`error: ${er.messege}`)
  }