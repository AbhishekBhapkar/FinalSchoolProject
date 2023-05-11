using AutoMapper;
using SNBPSchool.Dtos;
using SNBPSchool.Model;

namespace GodProject
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Students,GetStudentsDto>();
            CreateMap<AddStudentDto,Students>();
  
        }
    }
}