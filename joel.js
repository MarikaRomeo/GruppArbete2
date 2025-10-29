

let now = new Date;

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

export function calculatedAge(age){

  let ageToReturn;
  let ageArr = [];
  ageArr = age.split('-').map(Number);

  ageToReturn = year - ageArr[0];

  if (ageArr[1] > month || (ageArr[1] === month && ageArr[2] > day)) {
    ageToReturn--;
  }


  return ageToReturn;
}