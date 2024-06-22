// seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Create some sample doctors
    // @ts-ignore
    await prisma.doctor.createMany({
        data: [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                address: '123 Main St, Anytown USA',
                img: 'https://example.com/doctor-john-doe.jpg',
                phone: '555-1234',
                gender: 'male',
                dob: '1980-01-01',
                biography: 'Dr. John Doe is a highly experienced family physician with over 15 years of practice.',
                clinicName: 'Acme Medical Clinic',
                clinicAddress: '456 Oak Rd, Anytown USA',
                clinicImages: 'https://example.com/clinic-images.jpg',
                city: 'Anytown',
                state: 'CA',
                country: 'USA',
                postalCode: '12345',
                price: '100',
                services: 'General Checkup, Preventive Care, Chronic Disease Management',
                specialization: 'Family Medicine',
                degree: 'MD',
                college: 'University of California, Los Angeles',
                completionYear: '2005',
                experience: '15',
                designation: 'Family Physician',
                award: 'Best Doctor of the Year',
                awardYear: '2020',
                registration: 'ABC123',
                year: '2005',
                experienceHospitalName: 'Acme Hospital',
                expericenceStart: '2005-01-01',
                expericenceEnd: '2010-12-31',
                verified: true
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                address: '789 Oak St, Anytown USA',
                img: 'https://example.com/doctor-jane-smith.jpg',
                phone: '555-5678',
                gender: 'female',
                dob: '1985-05-15',
                biography: 'Dr. Jane Smith is a board-certified pediatrician with a passion for child health.',
                clinicName: 'Pediatric Care Clinic',
                clinicAddress: '321 Maple Rd, Anytown USA',
                clinicImages: 'https://example.com/clinic-images-2.jpg',
                city: 'Anytown',
                state: 'CA',
                country: 'USA',
                postalCode: '12345',
                price: '150',
                services: 'Well-child Checkups, Immunizations, Sick Visits',
                specialization: 'Pediatrics',
                degree: 'MD',
                college: 'University of Southern California',
                completionYear: '2010',
                experience: '10',
                designation: 'Pediatrician',
                award: 'Outstanding Physician of the Year',
                awardYear: '2018',
                registration: 'XYZ456',
                year: '2010',
                experienceHospitalName: 'Children Hospital',
                expericenceStart: '2010-01-01',
                expericenceEnd: '2015-12-31',
                verified: true
            }
        ]
    })

    console.log('Seeded database with sample doctor data.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })