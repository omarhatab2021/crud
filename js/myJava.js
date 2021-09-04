/*

var 
     redeclare (yes not error).
     access before declare(undefined).
     varriable scope drama (add to window).

let , const 
     redeclare (no with message error).
     access before declare(message error).
     varriable scope drama (message error).


     ----------math object------
     Math.round(100.6) === 101 normal round.
     Math.ceil(100.6) === 101 go to high.
     Math.floar(100.6) === 100 go to low.
     Math.max(10 , 15 , 20 , -9 ) === 20 choose max value.
     Math.min(10 , 15 , 20 , -9 ) === -9 go to min value.
     Math.pow(10 , 2) === 100 power exponenet = 10 ** 2

     ------------------------------
     console.log(+"100.555"); ===> 100.555
     console.log(-"100.555"); ===> 100.555
     console.log(Number("100.555")); ===> 100.555
     console.log(parseInt("100.555")); ===> 100 // output integer. can make a analysis for number only .(100.555omar) ===> 100
     console.log(parseFloat("100.555")); ===> 100.555 // output float. can make a analysis for number only .(100.555omar) ===> 100.555


     comprision between slice , subsring , substr. 
     slice (starting index , end index) cant include end  , have a negative value , cant swap.
     substring (starting index , end index) cant include end  ,not have a negative value , can swap.
     substr (starting index , amount of character to found) have a negative value , cant swap.
     ***********
     include ("char for search" , start index)

*/
//setting up varriables
let thInput = document.querySelector('.add-task input'),
     addTask = document.querySelector('.add-task span'),
     tasksContent = document.querySelector('.tasks-content'),
     noTasksMsg = document.querySelector('.no-tasks-message'),
     tasksCount = document.querySelector('.task-count span'),
     tasksCompleted = document.querySelector('.tasks-completed span');
     
     

     //focus on input 
     window.onload = function() {
          thInput.focus();
     }
     //adding the tasks 
     addTask.onclick = function() {
          //check if input if empty 
          if(thInput.value === "") {
          //show wrong
          document.querySelector('.splash-screen').classList.add('show-splash');

          //hide wrong message (Splash-screen)
          setTimeout(() => {
          document.querySelector('.splash-screen').classList.remove('show-splash');
          } , 2000)

          }
          else {
               //check noTasksMessage
               if(document.body.contains(document.querySelector('.no-tasks-message'))) {
                    document.querySelector('.no-tasks-message').remove();
               }
               //remove no tasks message from html
               noTasksMsg.remove();
               //create span element
               let mainSpan = document.createElement('span');

               //add class task-box for mainSpan
               mainSpan.setAttribute('class' , 'task-box');

               //add text to main span
               let textSpan = document.createTextNode(thInput.value);

               //add textSpan to mainSpan
               mainSpan.appendChild(textSpan);

               //create edit span 
               let editSpan = document.createElement('span');

               //create edit text
               let textEdit = document.createTextNode('Edit');

               //add class del to editSpan
               editSpan.setAttribute('class' , 'Editor')
               //add textEdit to editSpan
               editSpan.appendChild(textEdit);
               
               //create delete span 
               let deleteSpan = document.createElement('span');

               //add text to deleteSpan
               let deleteText = document.createTextNode('Delete');

               //add class del for deleteSpan 
               deleteSpan.className = 'del';

               //add deleteText to deleteSpan
               deleteSpan.appendChild(deleteText);

               //add mainSpan to 
               tasksContent.appendChild(mainSpan);

               //content span
               let contentSpan = document.createElement('span');

               //add class content-span 
               contentSpan.setAttribute('class' , 'content-span');

               //add to contentSpan
               contentSpan.appendChild(editSpan);
               contentSpan.appendChild(deleteSpan);
               
               //append contentSpan to mainSpan
               mainSpan.appendChild(contentSpan);
          }
          //increase task-count by one
          calculateTasks();

     }


     //create deleted function 
     document.addEventListener('click' , function(e){

          //if target has class del
          if(e.target.classList.contains('del')) {
               //remove target parent
               e.target.parentNode.parentNode.remove();
               //decreas tasks length 
               calculateTasks();
               //if tasks equal zero 
               if(tasksContent.childElementCount == 0) {
                    tasksZero();
               }
          }
          // target has class editor
          if(e.target.classList.contains('Editor')){
               document.querySelector('.splash-edit').classList.add('EdNone');
               e.target.parentNode.parentNode.classList.add('letEdit');
          }

          //target has id cancel
          if(e.target.id == "cancel") {
               document.querySelector('.splash-edit').classList.remove('EdNone');
          }
          //target has id ok
          if(e.target.id == "ok") {
               if(document.querySelector('.editNow').value == "") {
                    document.querySelector('.splash-screen').classList.add('show-splash')

                    //hide wrong message (Splash-screen)
                    setTimeout(() => {
                    document.querySelector('.splash-screen').classList.remove('show-splash');
                    } , 1000);
               }
               else{
                    document.querySelector('.splash-edit').classList.remove('EdNone');
                    document.querySelector('.letEdit').firstChild.textContent = document.querySelector('.editNow').value;
                    for(let i = 0 ; i < tasksContent.children.length ; i++) {
                         tasksContent.children[i].classList.remove('letEdit');
                    }
                    }
               
          }
          //task-box
          if(e.target.classList.contains('task-box')) {
               e.target.classList.toggle('finshed');
               calculateTasks();
          }
          //delete all
          if(e.target.id == "delAll") {
               for( i = 0 ; i < tasksContent.childElementCount; i++) {
                    tasksContent.childNodes[i].remove();
                    if(tasksContent.childElementCount == 0) {
                         tasksZero();
                    }
                    calculateTasks();
               }
               }
          //finsh all
               if(e.target.id == "FinshAll") {
                    for( i = 0 ; i < tasksContent.childElementCount; i++) {
                         document.querySelectorAll('.task-box')[i].classList.add('finshed');
                    }
                    }
                    calculateTasks();
          
     });
     //if tasks is zero 
     function tasksZero() {
          let noTasksMsg = document.createElement('span');
          noTasksMsg.className = "no-tasks-message";
          let taskText = document.createTextNode('No Tasks To Show');
          noTasksMsg.appendChild(taskText);
          tasksContent.appendChild(noTasksMsg);
     }
     //create function calculate tasks
     function calculateTasks() {
          tasksCount.innerHTML = document.querySelectorAll('.task-box').length;
          tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finshed').length;
     }

//if two tasks is simillar

