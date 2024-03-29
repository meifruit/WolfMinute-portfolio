Rails app generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team.
<h1 align="center">Description</h1>

<p align="center">Meeting application</p>
<p>   An innovative meeting calendar that revolutionizes scheduling. Easily manage your schedule, meeting dates, rooms, and attendees, with AI-driven suggestions for meeting objectives. Seamlessly join video calls, participate in chats, and explore in-depth meeting analytics. Discover a complete solution for productive meetings, conveniently accessible. Plus, effortlessly create meetings by leveraging AI to find optimal times when all attendees are available.</p>

<img src="https://github.com/meifruit/WolfMinute-portfolio/blob/master/app/assets/images/calendarshow.png"/>
<img src="https://github.com/meifruit/WolfMinute-portfolio/blob/master/app/assets/images/analystic.png"/>
 
<br>

## Getting Started
### Setup

Install gems
```
bundle install
```
Install JS packages
```
yarn install
```

### ENV Variables
Create `.env` file
```
touch .env
```
Inside `.env`, set these variable.
```
CLOUDINARY_URL=your_own_cloudinary_url_key
MAPBOX_API_KEY=your_own_mapbox_url_key
```

### DB Setup
```
rails db:create
rails db:migrate
rails db:seed
```

### Run a server
```
rails s
```

## Built With
- [Rails 6](https://guides.rubyonrails.org/) - Backend / Front-end
- [Stimulus JS](https://stimulus.hotwired.dev/) - Front-end JS
- [Render](https://render.com/) - Deployment
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Bootstrap](https://getbootstrap.com/) — Styling
- [Figma](https://www.figma.com) — Prototyping

## Team Members
- Xuemei Huang
- Rika Saito
- Jun Ukemori
- Juan David Bernal


