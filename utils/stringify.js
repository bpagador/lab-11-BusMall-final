let choicesMadeArray = [];

export default function updateChoicesArray(){
    localStorage.setItem('CHOICES-MADE', JSON.stringify(choicesMadeArray));
}