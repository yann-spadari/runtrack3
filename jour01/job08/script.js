function sommenombrespremiers(nbr1, nbr2) {
  var nbr1, nbr2, sum;
  sum = nbr1 + nbr2;
  
  for(var i = 2; i < nbr1; i++)

    if(nbr1%i === 0 || nbr2%i === 0) {
      return false;
    }
    else {
      return sum;
    }
}

console.log(sommenombrespremiers(3, 2));