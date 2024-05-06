const courses = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            }
        ]
    },
    {
        id: 2,
        name: 'Advanced React Development',
        instructor: 'Jane Smith',
        description: 'Take your React skills to the next level with advanced concepts and best practices.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2022/04/04/16/24/technology-7111765_960_720.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['Proficiency in React', 'Experience with state management libraries like Redux'],
        syllabus: [
            {
                week: 1,
                topic: 'Advanced State Management',
                content: 'Deep dive into Redux and advanced state management techniques.'
            },
            {
                week: 2,
                topic: 'Performance Optimization',
                content: 'Strategies for optimizing React apps for better performance.'
            },
        ],
        students: []
    },
    // Add the other courses here...
    {
        id: 3,
        name: 'Full Stack Web Development',
        instructor: 'Emily Brown',
        description: 'Learn to build modern web applications from front to back using popular frameworks.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/06/03/15/01/computer-8037838_1280.jpg',
        duration: '12 weeks',
        schedule: 'Tuesdays and Thursdays, 6:30 PM-8:30 PM',
        location: 'Online',
        prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Web Development',
                content: 'Overview of web technologies and setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Frontend Development with React',
                content: 'Building interactive user interfaces with React.'
            },
        ],
        students: [
            {
                id: 103,
                name: 'Charlie Brown',
                email: 'charlie@example.com',
            },
            {
                id: 104,
                name: 'Diana Miller',
                email: 'diana@example.com',
            }
        ]
    },
    {
        id: 4,
        name: 'Data Science Fundamentals',
        instructor: 'Michael Johnson',
        description: 'Get started with the basics of data science, including data analysis and visualization.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/05/15/12/17/technology-7994887_1280.jpg',
        duration: '6 weeks',
        schedule: 'Fridays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: 'Overview of data science, its applications, and tools.'
            },
            {
                week: 2,
                topic: 'Data Analysis with Python',
                content: 'Using libraries like Pandas for data manipulation and analysis.'
            },
        ],
        students: []
    },
    {
        id: 5,
        name: 'Mobile App Design',
        instructor: 'Sophia Lee',
        description: 'Learn the principles of mobile app design and create visually appealing and user-friendly interfaces.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/06/03/15/01/computer-8037838_1280.jpg',
        duration: '8 weeks',
        schedule: 'Saturdays, 10:00 AM-12:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of design principles'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Mobile Design',
                content: 'Understanding the unique challenges and considerations of mobile design.'
            },
            {
                week: 2,
                topic: 'UI/UX Fundamentals',
                content: 'Exploring user interface and user experience design principles.'
            },
        ],
        students: []
    },
    {
        id: 6,
        name: 'Machine Learning Basics',
        instructor: 'David Wilson',
        description: 'Gain an understanding of fundamental machine learning concepts and algorithms.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/03/30/17/01/technology-7888263_1280.jpg',
        duration: '8 weeks',
        schedule: 'Wednesdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of linear algebra and statistics'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Machine Learning',
                content: 'Overview of machine learning, types of algorithms, and applications.'
            },
            {
                week: 2,
                topic: 'Supervised Learning',
                content: 'Understanding supervised learning algorithms like linear regression and decision trees.'
            },
        ],
        students: [
            {
                id: 105,
                name: 'Eva Martinez',
                email: 'eva@example.com',
            },
            {
                id: 106,
                name: 'Frank Wilson',
                email: 'frank@example.com',
            }
        ]
    },
    {
        id: 7,
        name: 'Cybersecurity Fundamentals',
        instructor: 'Kevin Adams',
        description: 'Learn the basics of cybersecurity, including threat detection, prevention, and response.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2022/04/04/16/24/technology-7111765_960_720.jpg',
        duration: '6 weeks',
        schedule: 'Thursdays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of computer networks'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cybersecurity',
                content: 'Overview of cybersecurity principles, threats, and best practices.'
            },
            {
                week: 2,
                topic: 'Network Security',
                content: 'Understanding network vulnerabilities and securing network infrastructure.'
            },
        ],
        students: []
    },
    {
        id: 8,
        name: 'Python Programming for Beginners',
        instructor: 'Sarah Thompson',
        description: 'Learn the fundamentals of Python programming language from scratch.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/08/18/15/08/internet-8198742_1280.jpg',
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['No prior programming experience required'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Python',
                content: 'Basics of Python syntax, variables, and data types.'
            },
            {
                week: 2,
                topic: 'Control Flow and Functions',
                content: 'Understanding loops, conditional statements, and writing functions.'
            },
        ],
        students: []
    },
    {
        id: 9,
        name: 'Blockchain Essentials',
        instructor: 'Alex Johnson',
        description: 'Discover the fundamental concepts of blockchain technology and its applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/03/30/17/01/technology-7888263_1280.jpg',
        duration: '6 weeks',
        schedule: 'Tuesdays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of computer science'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Blockchain',
                content: 'Overview of blockchain technology, distributed ledgers, and consensus mechanisms.'
            },
            {
                week: 2,
                topic: 'Smart Contracts',
                content: 'Understanding smart contracts and their implementation on blockchain platforms.'
            },
        ],
        students: []
    },
    {
        id: 10,
        name: 'iOS App Development',
        instructor: 'Chris Evans',
        description: 'Learn to build native iOS applications using Swift programming language and Xcode.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/05/15/12/17/technology-7994887_1280.jpg',
        duration: '10 weeks',
        schedule: 'Fridays, 7:00 PM-9:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to iOS Development',
                content: 'Overview of iOS app development, tools, and technologies.'
            },
            {
                week: 2,
                topic: 'UI Design with SwiftUI',
                content: 'Creating user interfaces using SwiftUI framework.'
            },
        ],
        students: []
    }
];

export { courses };
