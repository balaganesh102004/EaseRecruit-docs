---
sidebar_position: 3
---
# Database Structure of the Application

The application utilizes MongoDB as its database, with the following collections defined to manage data for companies, candidates, jobs, applications, and users. Each collection has a specific schema that outlines the structure of the documents within it.

## 1. User Collection
- **Schema**: User
```
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['ADMIN', 'COMPANY', 'CANDIDATE'], required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
});
const User = model('User', userSchema);
export default User;
```

## 2. Company Collection
- **Schema**: Company
```
import { Schema, model } from 'mongoose';

const companySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, minlength: 3, maxlength: 32 },
  logo: { type: String },
  banner: { type: String },
  phoneNumber: { type: String },
  about: { type: String },
  founded: { type: String },
  companySize: { type: String },
  location: { type: String },
  website: { type: String },
  galleries: [{ type: String }],
  videoURL: { type: String },
  industry: { type: String },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
  },
});

const Company = model('Company', companySchema);
export default Company;
```

## 3. Candidate Collection
- **Schema**: Candidate
```
import { Schema, model } from 'mongoose';

const candidateSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, minlength: 3, maxlength: 32 },
  avatar: { type: String },
  banner: { type: String },
  about: { type: String },
  industry: { type: String },
  title: { type: String },
  location: { type: String },
  phoneNumber: { type: String },
  skills: [{ title: { type: String } }],
  resume: {
    fileName: { type: String },
    fileURL: { type: String },
  },
  workExperience: [
    {
      timePeriod: String,
      position: String,
      company: String,
      details: String,
    },
  ],
  educationTraining: [
    {
      timePeriod: String,
      courseName: String,
      institution: String,
      details: String,
    },
  ],
});

const Candidate = model('Candidate', candidateSchema);
export default Candidate;
```

## 4. Job Collection
- **Schema**: Job
```
import { Schema, model } from 'mongoose';
import {
  ENUM_WORK_LEVEL,
  ENUM_EMPLOYMENT_TYPE,
  ENUM_JOB_STATUS,
} from '@/enums/job';

const jobSchema = new Schema({
  title: { type: String, required: true, unique: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  location: { type: String },
  industry: { type: String, required: true },
  description: { type: String, required: true },
  salaryRange: { type: String, required: true },
  experience: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(ENUM_JOB_STATUS),
    default: ENUM_JOB_STATUS.PUBLISHED,
  },
  workLevel: {
    type: String,
    enum: Object.values(ENUM_WORK_LEVEL),
    required: true,
  },
  employmentType: {
    type: String,
    enum: Object.values(ENUM_EMPLOYMENT_TYPE),
    required: true,
  },
  skills: [{ title: { type: String } }],
  requirements: [{ title: { type: String } }],
  responsibilities: [{ title: { type: String } }],
  stages: [{ title: { type: String } }],
}, { timestamps: true });

const Job = model('Job', jobSchema);
export default Job;
```
## 5. Application Collection
- **Schema**: Application
```
import { Schema, model } from 'mongoose';

const applicationSchema = new Schema({
  job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  candidate: { type: Schema.Types.ObjectId, ref: 'Candidate', required: true },
  status: { type: String, enum: ['APPLIED', 'INTERVIEWED', 'OFFERED'], default: 'APPLIED' },
}, { timestamps: true });

const Application = model('Application', applicationSchema);
export default Application;
```

## Summary
The database structure consists of five main collections: **User**, **Company**, **Candidate**, **Job**, and **Application**. Each collection has a defined schema that outlines the fields and their types, as well as any relationships between the collections (e.g., references to other collections). This structure allows for efficient data management and retrieval within the application.
