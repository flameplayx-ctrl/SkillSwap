# SkillSwap - Exchange Skills, Learn Without Money 🔄

## Project Overview

SkillSwap is a peer-to-peer skill exchange platform designed for teens and young adults to learn from each other without financial transactions. Users can teach the skills they know and learn skills they're interested in through direct exchanges.

## 🎯 Key Features

### Phase 1: Core Foundation
- ✅ User Authentication (Login/Register)
- ✅ Profile Creation & Management
- ✅ Skill Selection & Categorization
- ✅ Landing Page & Navigation
- ✅ Component Library (Cards, Badges, etc.)

### Phase 2: Essential Pages
- ✅ Dashboard (Home overview)
- ✅ Discover Matches (Smart filtering & discovery)
- ✅ User Profiles (Detailed view)
- ✅ Active Swaps Management
- ✅ Swap Request System

### Phase 3: Core Functionality
- ✅ Smart Matching Algorithm
- ✅ Ratings & Reviews System
- ✅ Skill Chain Visualization
- ✅ Advanced Search
- ✅ Admin Dashboard

### Phase 4: Trust & Safety
- ✅ Age Verification System
- ✅ Trust Score & Badges
- ✅ Favorites/Bookmarks
- ✅ Block User Functionality
- ✅ Report User System
- ✅ Safety Guidelines

### Phase 5: Final Polish
- ✅ Complete Routing Setup
- ✅ Animations & Transitions
- ✅ Responsive Design
- ✅ Error Handling
- ✅ Production Ready

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation bar
│   ├── SkillCard.jsx           # Skill display card
│   ├── UserCard.jsx            # User profile card
│   └── TrustBadge.jsx          # Trust indicator
├── context/
│   └── AppContext.jsx          # Global state management
├── pages/
│   ├── Landing.jsx             # Home page
│   ├── Login.jsx               # User login
│   ├── Register.jsx            # User registration
│   ├── Dashboard.jsx           # User dashboard
│   ├── Discover.jsx            # Match discovery
│   ├── UserProfile.jsx         # User profile detail
│   ├── Profile.jsx             # Current user profile
│   ├── ActiveSwaps.jsx         # Swap management
│   ├── Ratings.jsx             # Rating system
│   ├── SkillChain.jsx          # Skill chain viz
│   ├── Search.jsx              # Search page
│   ├── TrustCenter.jsx         # Trust management
│   ├── Favorites.jsx           # Bookmarked users
│   ├── BlockedUsers.jsx        # Blocked users list
│   ├── ReportUser.jsx          # Report functionality
│   └── AdminDashboard.jsx      # Admin panel
├── data/
│   └── mockData.js             # Sample data & utilities
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## 🎨 Tech Stack

- **Frontend**: React 18 + React Router 6
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **UI Components**: Lucide React Icons

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Key Pages

### Public Pages
- `/` - Landing page with features and CTA
- `/login` - User login (demo users available)
- `/register` - Multi-step registration

### Authenticated Pages
- `/dashboard` - Overview and recommendations
- `/discover` - Find matches with filters
- `/profile` - View/edit your profile
- `/profile/:userId` - View other users
- `/swaps` - Manage active skill exchanges
- `/ratings` - Rate and review exchanges
- `/skill-chain` - Visualize knowledge flow
- `/search` - Search for people and skills
- `/trust` - Verify age and view trust score
- `/favorites` - Bookmarked matches
- `/blocked` - Manage blocked users
- `/report` - Report inappropriate users
- `/admin` - Moderation dashboard

## 🔐 Security Features

1. **Age Verification** - Ensures safe community for minors
2. **Trust Scoring** - Reputation system based on reviews
3. **Reporting System** - Flag inappropriate behavior
4. **Blocking** - Users can block others
5. **Verification Badges** - Verified skills and profiles

## 🎯 Smart Matching Algorithm

Matches are calculated based on:
- Skill compatibility (what they teach vs. what you want to learn)
- Age similarity (prioritizes same age range)
- Trust level and ratings
- Geographic proximity
- Availability alignment

Score: 0-100%

## 🌟 Demo Users

Login with these users to test:
- **Alex** (15) - Video Editing & Roblox
- **Sam** (15) - Guitar & Music Production
- **Maya** (17) - UI/UX Design & Graphics
- **Omar** (16) - Python & JavaScript
- **Zara** (18) - Baking & Pastry
- **Liam** (20) - Fitness Training
- **Sophia** (28) - English & Literature
- **Marcus** (22) - Music Production

## 📊 Data Structure

### User Object
```javascript
{
  id: number,
  username: string,
  avatar: string (emoji),
  age: number,
  location: string,
  bio: string,
  verified: boolean,
  trustLevel: 1-3,
  ratings: 0-5,
  reviewCount: number,
  swapsCompleted: number,
  teaches: [{skill, level, verified}],
  wants: [{skill, level}],
  availability: string
}
```

## 🎓 Skills Categories

- 💻 Technology (Web Dev, Python, React, etc.)
- 🎨 Creative (Design, Illustration, Animation)
- 🎵 Music (Piano, Guitar, Singing, etc.)
- 📚 Education (Languages, Math, Sciences)
- 🏃 Sports (Basketball, Yoga, Fitness)
- 🍳 Cooking (Baking, Cuisine)
- 🌎 Languages (Spanish, French, etc.)
- 🔧 Practical Skills (Repair, DIY)
- 🎮 Gaming (Game Dev, Esports)
- 📸 Photography (Portrait, Landscape)

## 🚦 Swap Status Flow

1. **Pending** - Request sent, awaiting response
2. **Active** - Both users agreed
3. **Completed** - Exchange finished
4. **Declined** - Request rejected

## 📈 Future Enhancements

- Video calling integration
- In-app messaging system
- Calendar scheduling
- Skill verification by admins
- Gamification (badges, leaderboards)
- Community forums
- Parent consent system
- Session transcripts

## 🤝 Contributing

To contribute to SkillSwap:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - See LICENSE.md for details

## 💡 Design Principles

- **Teen-Friendly**: Simple, engaging interface
- **Safe**: Multiple verification layers
- **Inclusive**: Skills for everyone
- **Fair**: No money, pure knowledge exchange
- **Transparent**: Clear ratings and reviews

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check documentation
- Review safety guidelines

---

**Made with ❤️ to help people learn together**