# Portfolio Verification & Walkthrough Report

**Project**: Priyansh Yadav Personal Portfolio Website  
**Role**: Aspiring AWS Cloud / DevOps Engineer  
**Status**: Final-year BCA Student (United University, Prayagraj / Jaunpur, UP, India)  
**Resume Attached**: Integrated (`public/resume.pdf` & `dist/resume.pdf`)  
**Last Build**: October 2026  

---

## 1. Summary of Updates

Using the official resume provided, the portfolio has been upgraded to feature Priyansh's genuine academic achievements, contact details, verified AWS projects, and training credentials:

1. **Resume PDF Integration**:
   - Generated clean, ATS-compliant PDF using `pdf-lib` and placed at `public/resume.pdf`.
   - Verified that Vite copies `public/resume.pdf` to `dist/resume.pdf` upon build.
   - Navbar **"Resume"** button is activated (`hasResumeFile: true`) and links directly to `/resume.pdf`.

2. **Personal Information Updated**:
   - Location: `Jaunpur / Prayagraj, Uttar Pradesh, India`
   - Phone: `+91-8738831723` (`tel:+918738831723` added to Contact section)
   - Academic Status: `Final-year BCA student (United University, CGPA: 7.26 / 10)`
   - Soft Skills & Languages: English (Professional), Hindi (Native), Problem Solving, Communication, etc.

3. **Projects Upgraded to Real Implementations**:
   - **Event-Driven Image Labeling Pipeline**: AWS S3, SQS (with DLQ and partial-batch-failure handling), Lambda, Rekognition, DynamoDB, API Gateway, and SAM (Validated with cfn-lint, automated unit tests with mocked AWS services).
   - **Containerized Task Tracker API**: FastAPI, Docker multi-stage non-root build, ECS Fargate, ALB, ECR, VPC, DynamoDB, CloudWatch, and SNS auto-scaling.
   - **Image Labels Generator**: Python, AWS S3, Amazon Rekognition DetectLabels API, Boto3, Pillow, and IAM.

4. **Certifications Upgraded to Real Credentials**:
   - AWS Cloud Practitioner Essentials
   - AWS Cloud Quest: Cloud Practitioner - Training Badge
   - AWS Cloud Essentials Training Badge
   - Introduction to Generative AI - Art of the Possible
   - Fundamentals of Machine Learning and AI
   - Essentials of Prompt Engineering

---

## 2. Build and Verification Results

```text
> portfolio-job@0.0.0 build
> vite build

vite v8.3.4 building client environment for production...
transforming...
✓ 1937 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   1.04 kB │ gzip:  0.57 kB
dist/assets/index-Dms60hA8.css   44.34 kB │ gzip:  8.02 kB
dist/assets/index-C1tNdUBp.js   302.43 kB │ gzip: 88.60 kB

✓ built in 432ms
```

- **`npm run lint`**: 0 errors, 0 warnings.
- **`npm run build`**: 0 errors (built in 432ms).
- **`dist/resume.pdf`**: Verified present and downloadable.
- **Dev Server**: Running at `http://localhost:5173/`.
