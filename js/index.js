const btnNew = document.getElementById("btn-new");
const btnSave = document.getElementById("btn-save");
const btnClear = document.getElementById("btn-clear");
const tblStudents = document.getElementById("tbl-students");

const txtId = document.getElementById("txt-id");
const txtName = document.getElementById("txt-name");
const txtContact = document.getElementById("txt-contact");
const txtAddress = document.getElementById("txt-address");
const formStudent = document.getElementById("form-student");

btnNew.addEventListener("click", () => {
    [txtId, txtName, txtAddress, txtContact, btnSave, btnClear].forEach(element => {
        element.disabled = false;
    });
    txtName.focus();
    btnClear.click();
    btnSave.innerText = "SAVE";
});

function generateNewStudentId() {
    
}