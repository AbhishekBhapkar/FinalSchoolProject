using SNBPSchool.Dtos;
using SNBPSchool.Model;
using Microsoft.AspNetCore.Mvc;

namespace SNBPSchool.Services.StudentService
{
    public interface IStudentService
    {
        Task<ServiceResponse<List<GetStudentsDto>>> GetAllStudents();
        Task<ServiceResponse<List<GetStudentsDto>>> AddStudent(AddStudentDto newStudentAdd);
        Task<ServiceResponse<GetStudentsDto>> GetStudentById(int id);
        Task<ServiceResponse<List<GetStudentsDto>>> DeleteStudentById(int id);
        Task<ServiceResponse<GetStudentsDto>> UpdateStudentById(UpdateStudentDto updatedStudent);

    }
}