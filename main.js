students_array=[];
function submit(){
    var disp_array=[];
    for(var j=1;j<=4;j++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value; 
        console.log(name_of_the_student);
         students_array.push(name_of_the_student);
    }
    console.log(students_array);
    var length=students_array.length;
    console.log(length);
    for(var k=0;k<length;k++){
        disp_array.push("<h4>NAME - "+ students_array[k] + "</h4>")
        console.log(disp_array);
    }
    console.log(disp_array);
    document.getElementById("display_name_with_commas").innerHTML=disp_array;
    var remove_commas=disp_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students_array.sort();
    console.log(students_array);
    var disp_sorting=[];
    var length=students_array.length;
    console.log(length);
    for(var k=0;k<length;k++){
        disp_sorting.push("<h4>NAME - "+ students_array[k] + "</h4>")
        console.log(disp_sorting);
        var remove_commas=disp_sorting.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }
    
}
function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+students_array+"</h1>";

}