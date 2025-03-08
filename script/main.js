document.getElementById("blog-btn").addEventListener('click',
    function(){
        window.location.href = "blog.html"
    }
)

const completeButtons = document.getElementsByClassName("complete-btn")

for (const button of completeButtons){
    button.addEventListener('click',
        function(){
            alert("Board Updated Successfully");
            assignedTask = parseInt(document.getElementById("assigned-task").innerText);
            checkedTask = parseInt(document.getElementById("checked-task").innerText);

            if (assignedTask === 1){
                alert("Congrats!! You have completed all the tasks");
            }

            if(assignedTask !== 0){
                document.getElementById("assigned-task").innerText = assignedTask - 1;
                document.getElementById("checked-task").innerText = checkedTask + 1;
                button.setAttribute('disabled', true);

                let taskTitle = button.parentNode.parentNode.childNodes[3].innerText;
                let time = getTime();

                const activity = document.getElementById("activity")
                const p = document.createElement('p')
                p.innerText=`You have Completed The Task ${taskTitle} at ${time}`
                p.classList.add("bg-[#F4F7FF]", "p-4", "rounded-lg", "text-gray-600", "mb-4")
                activity.appendChild(p)
            }
        }
    )
}

document.getElementById("clear-history").addEventListener('click',
    function(){
        document.getElementById("activity").innerHTML = "";
        }
)

document.getElementById("theme-color").addEventListener('click',
    function(){
        const bgColor = randomColor();
        document.body.style.backgroundColor = bgColor;
        }
)

