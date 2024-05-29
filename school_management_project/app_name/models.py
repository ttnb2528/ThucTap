from django.db import models

class Major(models.Model):
    major_code = models.CharField(max_length=50)
    major_name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

class Teacher(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    EMPLOYMENT_STATUS_CHOICES = [
        ('permanent', 'Permanent'),
        ('contract', 'Contract'),
    ]
    teacher_code = models.CharField(max_length=50)
    full_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    identity_number = models.CharField(max_length=50)
    issue_date = models.DateField()
    issue_place = models.CharField(max_length=100)
    place_of_birth = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=100)
    ethnicity = models.CharField(max_length=50, blank=True, null=True)
    religion = models.CharField(max_length=50, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)
    contact_address = models.CharField(max_length=255, blank=True, null=True)
    city_province = models.CharField(max_length=100, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    ward = models.CharField(max_length=100, blank=True, null=True)
    employment_status = models.CharField(max_length=20, choices=EMPLOYMENT_STATUS_CHOICES)
    staff_category = models.CharField(max_length=100, blank=True, null=True)
    position = models.CharField(max_length=100, blank=True, null=True)
    foreign_language = models.CharField(max_length=100, blank=True, null=True)
    foreign_language_level = models.CharField(max_length=100, blank=True, null=True)
    it_skill_level = models.CharField(max_length=100, blank=True, null=True)
    vocational_skills = models.CharField(max_length=255, blank=True, null=True)
    pedagogical_skills = models.CharField(max_length=255, blank=True, null=True)
    political_theory_level = models.CharField(max_length=100, blank=True, null=True)
    state_management_level = models.CharField(max_length=100, blank=True, null=True)
    educational_management_cert = models.CharField(max_length=255, blank=True, null=True)
    years_of_teaching_experience = models.IntegerField(blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    teaching_duties = models.CharField(max_length=255, blank=True, null=True)
    teaching_major = models.CharField(max_length=100, blank=True, null=True)
    party_join_date = models.DateField(blank=True, null=True)
    party_join_place = models.CharField(max_length=100, blank=True, null=True)
    tenure_start_date = models.DateField(blank=True, null=True)

class Classroom(models.Model):
    room_code = models.CharField(max_length=50)
    room_name = models.CharField(max_length=100)
    room_type = models.CharField(max_length=100)
    area = models.FloatField()
    room_format = models.CharField(max_length=100)
    number_of_desks = models.IntegerField()
    number_of_chairs = models.IntegerField()
    renovation_date = models.DateField(blank=True, null=True)
    usage_status = models.CharField(max_length=100)
    location = models.CharField(max_length=255)

class Administrator(models.Model):
    ROLE_CHOICES = [
        ('superadmin', 'Superadmin'),
        ('admin', 'Admin'),
    ]
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

class Student(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    address = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

class Course(models.Model):
    course_code = models.CharField(max_length=50)
    course_name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    credits = models.IntegerField(blank=True, null=True)
    major = models.ForeignKey(Major, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrollment_date = models.DateField(blank=True, null=True)

class Schedule(models.Model):
    DAY_OF_WEEK_CHOICES = [
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ]
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    day_of_week = models.CharField(max_length=10, choices=DAY_OF_WEEK_CHOICES)
    start_time = models.TimeField()
    end_time = models.TimeField()

class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    grade = models.FloatField()

class ProgressReport(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    report_date = models.DateField()
    report = models.TextField()

class Equipment(models.Model):
    equipment_code = models.CharField(max_length=50)
    equipment_name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    unit = models.CharField(max_length=50)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    year_of_use = models.IntegerField()
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    managing_department = models.CharField(max_length=100)
    usage_status = models.CharField(max_length=100)

class Class(models.Model):
    class_code = models.CharField(max_length=50)
    class_name = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)

class Report(models.Model):
    REPORT_TYPE_CHOICES = [
        ('student', 'Student'),
        ('teacher', 'Teacher'),
        ('course', 'Course'),
        ('classroom', 'Classroom'),
        ('general', 'General'),
    ]
    report_code = models.CharField(max_length=50)
    report_name = models.CharField(max_length=100)
    report_date = models.DateField()
    description = models.TextField(blank=True, null=True)
    created_by = models.ForeignKey(Administrator, on_delete=models.CASCADE)
    report_type = models.CharField(max_length=10, choices=REPORT_TYPE_CHOICES)
