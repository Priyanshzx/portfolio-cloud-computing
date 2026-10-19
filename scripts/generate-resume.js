import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.05, 0.08, 0.15); // Dark navy
  const accentColor = rgb(0.85, 0.45, 0.0); // AWS Orange
  const grayColor = rgb(0.35, 0.4, 0.45);
  const bodyColor = rgb(0.15, 0.2, 0.25);

  let y = height - 42;
  const margin = 45;
  const maxRight = width - margin;

  // Header - Name
  page.drawText('PRIYANSH YADAV', {
    x: margin,
    y: y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });

  y -= 16;
  page.drawText('Jaunpur / Prayagraj, Uttar Pradesh, India', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: grayColor,
  });

  y -= 14;
  const contactText = '+91-8738831723  |  yspriyanshu07@gmail.com  |  linkedin.com/in/priyansh-yadav-090a97350  |  github.com/priyanshzx';
  page.drawText(contactText, {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: accentColor,
  });

  y -= 10;
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: maxRight, y: y },
    thickness: 1.2,
    color: accentColor,
  });

  // Helper for Section Titles
  function drawSectionTitle(title) {
    y -= 18;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: maxRight, y: y },
      thickness: 0.6,
      color: rgb(0.75, 0.8, 0.85),
    });
    y -= 10;
  }

  // Text wrapper helper
  function drawWrappedText(text, x, size, font, color, maxW = maxRight - x, lineSpacing = 11.5) {
    const words = text.split(' ');
    let currentLine = '';

    for (let n = 0; n < words.length; n++) {
      const testLine = currentLine.length > 0 ? currentLine + ' ' + words[n] : words[n];
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxW && n > 0) {
        page.drawText(currentLine, { x, y, size, font, color });
        y -= lineSpacing;
        currentLine = words[n];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine.length > 0) {
      page.drawText(currentLine, { x, y, size, font, color });
      y -= lineSpacing;
    }
  }

  // Professional Summary
  drawSectionTitle('Professional Summary');
  const summary = 'Cloud Computing enthusiast (BCA student) with hands-on AWS experience — event-driven serverless pipelines (Lambda, SQS, DynamoDB) and a containerized microservice on ECS Fargate with auto-scaling and monitoring. Skilled in IAM, VPC, and Infrastructure as Code (SAM/CloudFormation). Seeking an entry-level Cloud/DevOps role to apply practical, project-tested AWS skills.';
  drawWrappedText(summary, margin, 8.5, fontRegular, bodyColor);

  // Education
  drawSectionTitle('Education');
  page.drawText('United University', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('Sep 2024 – Present', { x: maxRight - 85, y: y, size: 8.5, font: fontRegular, color: grayColor });
  y -= 11;
  page.drawText('Bachelor of Computer Applications (BCA) — CGPA: 7.26 / 10', { x: margin, y: y, size: 8.5, font: fontRegular, color: bodyColor });
  y -= 13;

  page.drawText('Mata Prasad Adarsh Inter College, Jaunpur', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('Apr 2022 – Apr 2023', { x: maxRight - 85, y: y, size: 8.5, font: fontRegular, color: grayColor });
  y -= 11;
  page.drawText('12th (PCM - Physics, Chemistry, Mathematics)', { x: margin, y: y, size: 8.5, font: fontRegular, color: bodyColor });
  y -= 6;

  // Technical Skills
  drawSectionTitle('Technical Skills');
  const skills = [
    { label: 'Cloud (AWS):', val: 'Lambda, ECS Fargate, S3, DynamoDB, API Gateway, SQS, SNS, VPC, IAM, ALB, ECR, CloudWatch, SAM, CloudFormation, Rekognition' },
    { label: 'OS & Networking:', val: 'Linux, Windows | TCP/IP, DNS, HTTP/HTTPS, Subnetting, CIDR, Routing, Security Groups' },
    { label: 'Programming & Data:', val: 'Python, FastAPI, Boto3, JavaScript | SQL, MySQL' },
    { label: 'DevOps & IaC:', val: 'Docker (multi-stage, non-root), Git, GitHub, Infrastructure as Code (IaC), cfn-lint, Unit Testing with Mocked AWS Services' },
  ];
  for (const sk of skills) {
    page.drawText(sk.label, { x: margin, y: y, size: 8.5, font: fontBold, color: primaryColor });
    drawWrappedText(sk.val, margin + 110, 8.5, fontRegular, bodyColor, maxRight - (margin + 110));
  }
  y -= 2;

  // Projects
  drawSectionTitle('Projects');

  // Project 1
  page.drawText('Event-Driven Image Labeling Pipeline', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('| AWS: S3, SQS, Lambda, Rekognition, DynamoDB, API Gateway, SAM', { x: margin + 175, y: y, size: 7.5, font: fontOblique, color: accentColor });
  y -= 11;
  const p1Bullets = [
    'Designed & deployed a serverless, event-driven pipeline that automatically detects and labels image content using AWS Rekognition.',
    'Decoupled upload from processing using SQS with a dead-letter queue (DLQ) and partial-batch-failure handling to isolate and retry failed items.',
    'Exposed results via a REST API (API Gateway + Lambda, backed by DynamoDB); defined IaC with AWS SAM/CloudFormation, validated with cfn-lint, and verified behavior with automated unit tests using mocked AWS services.'
  ];
  for (const b of p1Bullets) {
    page.drawText('•', { x: margin + 4, y: y, size: 8.5, font: fontBold, color: accentColor });
    drawWrappedText(b, margin + 14, 8, fontRegular, bodyColor, maxRight - (margin + 14), 11);
  }
  y -= 3;

  // Project 2
  page.drawText('Containerized Task Tracker API', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('| AWS: ECS Fargate, ALB, DynamoDB, ECR, VPC, CloudWatch, SNS', { x: margin + 150, y: y, size: 7.5, font: fontOblique, color: accentColor });
  y -= 11;
  const p2Bullets = [
    'Built and deployed a containerized FastAPI microservice (Docker multi-stage build, non-root user) on ECS Fargate behind an Application Load Balancer.',
    'Configured VPC networking & security groups from scratch and split least-privilege IAM across separate Task Execution and Task Roles.',
    'Set up CPU-based auto-scaling and CloudWatch dashboard with SNS alarm notifications for high CPU and unhealthy hosts, with test coverage across success, 404, and failure-simulation cases.'
  ];
  for (const b of p2Bullets) {
    page.drawText('•', { x: margin + 4, y: y, size: 8.5, font: fontBold, color: accentColor });
    drawWrappedText(b, margin + 14, 8, fontRegular, bodyColor, maxRight - (margin + 14), 11);
  }
  y -= 3;

  // Project 3
  page.drawText('Image Labels Generator', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('| Python, AWS S3, Amazon Rekognition, Boto3, Pillow, Matplotlib', { x: margin + 120, y: y, size: 7.5, font: fontOblique, color: accentColor });
  y -= 11;
  const p3Bullets = [
    'Built a Python tool that analyzes images stored in Amazon S3 using the Amazon Rekognition DetectLabels API, generating object/scene labels with confidence scores.',
    'Configured AWS CLI and IAM permissions to securely authenticate requests, using Boto3 for integration and Pillow/Matplotlib to display labeled images.'
  ];
  for (const b of p3Bullets) {
    page.drawText('•', { x: margin + 4, y: y, size: 8.5, font: fontBold, color: accentColor });
    drawWrappedText(b, margin + 14, 8, fontRegular, bodyColor, maxRight - (margin + 14), 11);
  }
  y -= 2;

  // Certifications
  drawSectionTitle('Certifications & Training');
  const certLines = [
    '• AWS Cloud Practitioner Essentials  • AWS Cloud Quest: Cloud Practitioner - Training Badge',
    '• AWS Cloud Essentials Training Badge  • Introduction to Generative AI - Art of the Possible',
    '• Fundamentals of Machine Learning and AI  • Essentials of Prompt Engineering'
  ];
  for (const cl of certLines) {
    page.drawText(cl, { x: margin, y: y, size: 8, font: fontRegular, color: bodyColor });
    y -= 11;
  }

  // Languages & Soft Skills
  drawSectionTitle('Languages & Soft Skills');
  page.drawText('Languages: English (Professional Working Proficiency) | Hindi (Native Proficiency)', { x: margin, y: y, size: 8, font: fontRegular, color: bodyColor });
  y -= 11;
  page.drawText('Soft Skills: Problem Solving • Communication • Adaptability • Resourcefulness • Time Management • Composure • Curiosity', { x: margin, y: y, size: 8, font: fontRegular, color: bodyColor });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated pixel-perfect resume:', outputPath);
}

generateResumePdf().catch(console.error);
