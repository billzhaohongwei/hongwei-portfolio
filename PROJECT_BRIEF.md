# Hongwei Portfolio Website - Project Brief

## 1. Project Overview

This project is a personal portfolio website for Hongwei Zhao.

The purpose of the website is to present Hongwei's technical background, projects, skills, certifications, education, and work experience to employers, recruiters, and professional contacts.

The website should look professional, clean, and modern. It should emphasize Hongwei's strengths in cloud computing, DevOps, IT support, full-stack development, and project-based learning.

## 2. Project Name

Repository name:

`hongwei-portfolio`

Local project path:

`D:\Projects\hongwei-portfolio`

GitHub repository:

`https://github.com/billzhaohongwei/hongwei-portfolio`

## 3. Technology Stack

The project uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- Git and GitHub

Recommended deployment platform:

- Vercel

Backend:

- No full backend is needed at the beginning.
- If needed later, use Next.js API routes for small backend features.
- For contact form options, consider Formspree, EmailJS, Resend, or a simple Next.js API route.

## 4. Main Website Goals

The website should help Hongwei:

- Showcase cloud, DevOps, and full-stack projects
- Present technical skills clearly
- Provide a professional online presence
- Share resume and GitHub links
- Support future job applications
- Demonstrate practical experience with React, TypeScript, Next.js, and Tailwind CSS

## 5. Target Audience

The main audience includes:

- Recruiters
- Hiring managers
- IT managers
- Cloud and DevOps teams
- Software development teams
- Professional contacts

## 6. Suggested Website Pages or Sections

Initial version can be a single-page website with sections:

1. Home / Hero
2. About
3. Skills
4. Projects
5. Experience
6. Certifications
7. Education
8. Contact

Possible future pages:

- `/projects`
- `/projects/[slug]`
- `/blog`
- `/resume`
- `/contact`

## 7. Personal Branding Direction

Suggested headline:

`Cloud & Full-Stack Developer`

Alternative headlines:

- `Junior Cloud & DevOps Developer`
- `IT Support and Cloud Computing Professional`
- `Full-Stack Developer with Cloud and DevOps Experience`

Suggested short introduction:

> I am Hongwei Zhao, a cloud and full-stack developer based in Toronto. I have experience with React, TypeScript, Firebase, AWS, Azure, Docker, Kubernetes, Terraform, and technical support. I enjoy building practical web applications and cloud-based solutions that are reliable, secure, and easy to maintain.

## 8. Important Skills to Highlight

### Frontend

- React
- TypeScript
- JavaScript
- Next.js
- Tailwind CSS
- HTML
- CSS

### Backend and Cloud

- Firebase
- Node.js
- Cloud Functions
- AWS
- Azure
- GCP
- PostgreSQL
- REST APIs

### DevOps and Infrastructure

- Docker
- Kubernetes
- Terraform
- Ansible
- GitHub Actions
- CI/CD
- Linux
- Bash
- PowerShell

### IT Support

- Windows 10/11
- Windows Server basics
- Active Directory basics
- Troubleshooting
- User support
- Documentation
- Ticket handling
- Remote support

## 9. Key Projects to Include

### Needlist.ORG Platform

Type:

`Full-stack / cloud / nonprofit platform`

Technologies:

`React, FlutterFlow, Firebase, Firestore, Cloud Functions, SendGrid, Stripe, GitHub Actions`

Possible description:

> Contributed to a cloud-based nonprofit platform using Firebase, Firestore, Cloud Functions, Stripe, SendGrid, and modern frontend tools. Worked on donation workflows, receipt generation, secure deployment practices, and multi-environment configuration.

### Expense Management Application Deployment with Kubernetes

Type:

`Cloud / Kubernetes / Capstone project`

Technologies:

`Kubernetes, PostgreSQL, Azure VMs, Terraform, Docker, GitHub Actions`

Possible description:

> Deployed a microservices-style expense management application using Kubernetes, PostgreSQL, Terraform, Docker images, persistent storage, and CI/CD workflows.

### Two-Tier Web Application Deployment with Kubernetes

Type:

`Cloud / AWS / Kubernetes project`

Technologies:

`Amazon EKS, Flask, MySQL, EBS, PVC, IAM Roles for Service Accounts, S3, GitHub Actions, Amazon ECR`

Possible description:

> Deployed a containerized Flask and MySQL application on Amazon EKS with persistent storage, secure S3 access through IAM Roles for Service Accounts, and automated image deployment through GitHub Actions and Amazon ECR.

### Automated Cloud Infrastructure with Terraform and Ansible

Type:

`Infrastructure as Code / DevOps project`

Technologies:

`Terraform, Ansible, AWS, EC2, NAT Gateway, Auto Scaling, GitHub Actions, TFLint, Trivy`

Possible description:

> Provisioned AWS infrastructure using Terraform and automated server configuration with Ansible. Integrated CI/CD quality checks using TFLint and Trivy.

### Active Directory Domain Services Architecture on Azure

Type:

`Azure / Windows Server / networking project`

Technologies:

`Azure VMs, Windows Server, Active Directory, VNet peering, Azure Bastion, IIS, Private DNS`

Possible description:

> Designed and deployed Windows Server infrastructure on Azure with Active Directory, VNet peering, Azure Bastion, IIS, and private DNS configuration.

### Secure Backup Solution for Remote Workforce

Type:

`Azure / security / backup project`

Technologies:

`Azure VPN, backup automation, encryption, centralized restore management`

Possible description:

> Designed a secure backup solution for remote employees using Azure Point-to-Site VPN, scheduled backups, encryption, and centralized restore control.

## 10. Certifications

Include:

- AWS Certified Solutions Architect – Associate
- AWS Certified Cloud Practitioner

## 11. Education

Include:

### Seneca Polytechnic

Program:

`Cloud Architecture & Administration`

Highlights:

- President's Honor List
- GPA 4.0

### University of Toronto Scarborough

Program:

`Honours Bachelor of Science in Computer Science`

## 12. Work Experience to Include

### Needlist.ORG

Role:

`Full-Stack Developer`

Focus areas:

- React and FlutterFlow development
- Firebase and Firestore
- Cloud Functions
- Stripe and SendGrid integration
- CI/CD and multi-environment deployment
- Tax receipt PDF generation

### Wisdom Academy Toronto

Role:

`Technical Support`

Focus areas:

- IT support
- Moodle LMS
- Linux server support
- Website and email support
- Hardware/software troubleshooting
- Documentation and user training

### TTEC Canada

Role:

`Technical Support Specialist / Customer Service Representative`

Focus areas:

- Customer support
- Troubleshooting
- Communication
- Ticket-style issue handling
- Remote support skills

## 13. Design Direction

Style:

- Clean
- Professional
- Modern
- Simple
- Easy to read
- Recruiter-friendly

Suggested design:

- Dark or light modern theme
- Clear navigation bar
- Strong hero section
- Project cards
- Skill badges
- Simple timeline for experience
- Contact call-to-action
- Mobile responsive layout

Avoid:

- Too many animations
- Too many colors
- Overly complex design
- Long paragraphs
- Unclear project descriptions

## 14. Suggested Folder Structure

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Navbar.tsx
    Footer.tsx
    SectionTitle.tsx
    ProjectCard.tsx
    SkillBadge.tsx
    ExperienceItem.tsx
  data/
    projects.ts
    skills.ts
    experience.ts
public/
  resume.pdf
PROJECT_BRIEF.md
README.md