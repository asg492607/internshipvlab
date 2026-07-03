function loginUser()
{
    let role =
    document.getElementById("role").value;

    if(role==="Student")
    {
        window.location=
        "student-dashboard.html";
    }

    if(role==="Teacher")
    {
        window.location=
        "teacher-dashboard.html";
    }

    if(role==="Admin")
    {
        window.location=
        "admin-dashboard.html";
    }
}