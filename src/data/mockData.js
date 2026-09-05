export const SKILLS_CATEGORIES = {
  '💻': { name: 'Technology', skills: ['Web Development', 'Python', 'JavaScript', 'React', 'HTML/CSS', 'Database Design', 'App Development', 'Cloud Computing'] },
  '🎨': { name: 'Creative', skills: ['Graphic Design', 'UI/UX Design', 'Illustration', 'Digital Art', 'Animation', 'Branding', 'Video Production'] },
  '🎵': { name: 'Music', skills: ['Piano', 'Guitar', 'Violin', 'Singing', 'Music Production', 'Drums', 'Ukulele', 'Bass'] },
  '📚': { name: 'Education', skills: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Literature'] },
  '🏃': { name: 'Sports', skills: ['Basketball', 'Football', 'Tennis', 'Swimming', 'Yoga', 'Fitness Training', 'Running'] },
  '🍳': { name: 'Cooking', skills: ['Baking', 'Italian Cuisine', 'Asian Cuisine', 'Pastry Making', 'Meal Planning', 'Nutrition'] },
  '🌎': { name: 'Languages', skills: ['Spanish', 'French', 'Mandarin', 'Arabic', 'German', 'Japanese', 'Korean'] },
  '🔧': { name: 'Practical Skills', skills: ['Car Repair', 'Home Repair', 'Carpentry', 'Plumbing', 'Welding'] },
  '🎮': { name: 'Gaming', skills: ['Roblox Development', 'Unity', 'Game Design', 'Esports Strategies', 'Game Modding'] },
  '📸': { name: 'Photography', skills: ['Portrait Photography', 'Landscape Photography', 'Photo Editing', 'Cinematography', 'Lighting'] },
};

export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const AGE_RANGES = [
  { id: '13-14', label: '13–14', min: 13, max: 14 },
  { id: '15-17', label: '15–17', min: 15, max: 17 },
  { id: '18-24', label: '18–24', min: 18, max: 24 },
  { id: '25-34', label: '25–34', min: 25, max: 34 },
  { id: '35+', label: '35+', min: 35, max: 120 },
];

export const VERIFICATION_STATES = {
  UNVERIFIED: '🟡 Age Unverified',
  VERIFIED: '🟢 Age Verified',
};

export const TRUST_LEVELS = {
  NEW: { label: '🟡 New', value: 1 },
  ESTABLISHED: { label: '🔵 Established', value: 2 },
  TRUSTED: { label: '🟢 Trusted', value: 3 },
};

export const REPORT_CATEGORIES = [
  'Incorrect age',
  'Fake skills',
  'Impersonation',
  'Scam/fraud',
  'Harassment',
  'Suspicious behavior',
  'Inappropriate content',
  'Other',
];

export const mockUsers = [
  {
    id: 1,
    username: 'Alex',
    avatar: '👨‍🎬',
    age: 15,
    ageRange: '15-17',
    location: 'Dubai, UAE',
    bio: 'Passionate about video editing and filmmaking',
    verified: true,
    trustLevel: 3,
    ratings: 4.8,
    reviewCount: 12,
    swapsCompleted: 14,
    teaches: [
      { skill: 'Video Editing', level: 'Advanced', verified: true },
      { skill: 'Roblox Development', level: 'Intermediate', verified: false },
      { skill: 'HTML/CSS', level: 'Intermediate', verified: false },
    ],
    wants: [
      { skill: 'Guitar', level: 'Beginner' },
      { skill: 'Photography', level: 'Beginner' },
    ],
    availability: 'Weekends',
  },
  {
    id: 2,
    username: 'Sam',
    avatar: '👨‍🎸',
    age: 15,
    ageRange: '15-17',
    location: 'Abu Dhabi, UAE',
    bio: 'Guitar enthusiast and music teacher',
    verified: true,
    trustLevel: 3,
    ratings: 4.9,
    reviewCount: 14,
    swapsCompleted: 16,
    teaches: [
      { skill: 'Guitar', level: 'Advanced', verified: true },
      { skill: 'Music Production', level: 'Intermediate', verified: false },
    ],
    wants: [
      { skill: 'Video Editing', level: 'Beginner' },
      { skill: 'Web Development', level: 'Beginner' },
    ],
    availability: 'Weekdays Evening',
  },
  {
    id: 3,
    username: 'Maya',
    avatar: '👩‍🎨',
    age: 17,
    ageRange: '15-17',
    location: 'Sharjah, UAE',
    bio: 'UI/UX Designer and digital artist',
    verified: false,
    trustLevel: 2,
    ratings: 4.6,
    reviewCount: 8,
    swapsCompleted: 9,
    teaches: [
      { skill: 'Graphic Design', level: 'Advanced', verified: true },
      { skill: 'UI/UX Design', level: 'Advanced', verified: true },
      { skill: 'Illustration', level: 'Intermediate', verified: false },
    ],
    wants: [
      { skill: 'Spanish', level: 'Beginner' },
      { skill: 'Python', level: 'Beginner' },
    ],
    availability: 'Anytime',
  },
  {
    id: 4,
    username: 'Omar',
    avatar: '👨‍💻',
    age: 16,
    ageRange: '15-17',
    location: 'Dubai, UAE',
    bio: 'Full-stack developer and tech enthusiast',
    verified: true,
    trustLevel: 3,
    ratings: 4.7,
    reviewCount: 10,
    swapsCompleted: 11,
    teaches: [
      { skill: 'Python', level: 'Advanced', verified: true },
      { skill: 'JavaScript', level: 'Advanced', verified: true },
      { skill: 'React', level: 'Intermediate', verified: false },
    ],
    wants: [
      { skill: 'Spanish', level: 'Beginner' },
      { skill: 'Basketball', level: 'Beginner' },
    ],
    availability: 'Weekends',
  },
  {
    id: 5,
    username: 'Zara',
    avatar: '👩‍🍳',
    age: 18,
    ageRange: '18-24',
    location: 'Dubai, UAE',
    bio: 'Professional baker and cooking instructor',
    verified: true,
    trustLevel: 3,
    ratings: 4.9,
    reviewCount: 18,
    swapsCompleted: 20,
    teaches: [
      { skill: 'Baking', level: 'Expert', verified: true },
      { skill: 'Pastry Making', level: 'Advanced', verified: true },
    ],
    wants: [
      { skill: 'French', level: 'Beginner' },
      { skill: 'Photography', level: 'Beginner' },
    ],
    availability: 'Weekends',
  },
  {
    id: 6,
    username: 'Liam',
    avatar: '🏋️',
    age: 20,
    ageRange: '18-24',
    location: 'Dubai, UAE',
    bio: 'Fitness trainer and personal coach',
    verified: true,
    trustLevel: 2,
    ratings: 4.5,
    reviewCount: 6,
    swapsCompleted: 7,
    teaches: [
      { skill: 'Fitness Training', level: 'Advanced', verified: true },
      { skill: 'Yoga', level: 'Intermediate', verified: false },
    ],
    wants: [
      { skill: 'Web Development', level: 'Beginner' },
      { skill: 'Guitar', level: 'Beginner' },
    ],
    availability: 'Mornings',
  },
  {
    id: 7,
    username: 'Sophia',
    avatar: '👩‍🏫',
    age: 28,
    ageRange: '25-34',
    location: 'Dubai, UAE',
    bio: 'English teacher and content writer',
    verified: true,
    trustLevel: 3,
    ratings: 4.8,
    reviewCount: 15,
    swapsCompleted: 18,
    teaches: [
      { skill: 'English', level: 'Expert', verified: true },
      { skill: 'Literature', level: 'Advanced', verified: true },
      { skill: 'Writing', level: 'Advanced', verified: false },
    ],
    wants: [
      { skill: 'Digital Art', level: 'Beginner' },
      { skill: 'Web Development', level: 'Beginner' },
    ],
    availability: 'Evenings',
  },
  {
    id: 8,
    username: 'Marcus',
    avatar: '👨‍🎵',
    age: 22,
    ageRange: '18-24',
    location: 'Abu Dhabi, UAE',
    bio: 'Music producer and sound engineer',
    verified: false,
    trustLevel: 2,
    ratings: 4.4,
    reviewCount: 5,
    swapsCompleted: 6,
    teaches: [
      { skill: 'Music Production', level: 'Advanced', verified: true },
      { skill: 'Piano', level: 'Intermediate', verified: false },
    ],
    wants: [
      { skill: 'Video Production', level: 'Beginner' },
      { skill: 'Python', level: 'Beginner' },
    ],
    availability: 'Flexible',
  },
];

export const calculateMatchPercentage = (user1, user2) => {
  if (!user1 || !user2 || user1.id === user2.id) return 0;

  let score = 0;
  let factors = 0;

  // Skill compatibility (most important)
  const user1TeachesSkills = user1.teaches.map(t => t.skill.toLowerCase());
  const user2WantsSkills = user2.wants.map(w => w.skill.toLowerCase());
  const user2TeachesSkills = user2.teaches.map(t => t.skill.toLowerCase());
  const user1WantsSkills = user1.wants.map(w => w.skill.toLowerCase());

  const match1 = user1TeachesSkills.filter(s => user2WantsSkills.includes(s)).length;
  const match2 = user2TeachesSkills.filter(s => user1WantsSkills.includes(s)).length;
  
  score += (match1 + match2) * 25;
  factors += 2;

  // Age compatibility (for teens, prioritize teen matches)
  const ageCompatible = Math.abs(user1.age - user2.age) <= 5;
  score += ageCompatible ? 20 : 5;
  factors += 1;

  // Trust level
  const avgTrust = (user1.trustLevel + user2.trustLevel) / 2;
  score += avgTrust * 10;
  factors += 1;

  // Ratings
  const avgRating = (user1.ratings + user2.ratings) / 2;
  score += (avgRating / 5) * 15;
  factors += 1;

  // Location (bonus for same general area)
  const sameCityArea = user1.location.split(',')[0].toLowerCase() === user2.location.split(',')[0].toLowerCase();
  score += sameCityArea ? 10 : 0;
  factors += 1;

  return Math.min(100, Math.round((score / (factors * 25)) * 100));
};

export const getTrustLevel = (user) => {
  if (user.swapsCompleted >= 15 && user.ratings >= 4.7) return TRUST_LEVELS.TRUSTED;
  if (user.swapsCompleted >= 5 && user.ratings >= 4.3) return TRUST_LEVELS.ESTABLISHED;
  return TRUST_LEVELS.NEW;
};
