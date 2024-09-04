export class Tutorial {
  constructor(
    id = 0,
    title = '',
    description = '',
    category = 'General',
    difficulty = 'Beginner',
    duration = 0,
    instructor = 'Unknown',
    publicationDate = new Date(),
    published = false,
    rating = 0
  ) {
    this.id = id !== null ? id : 0
    this.title = title
    this.description = description
    this.category = category
    this.difficulty = difficulty
    this.duration = duration
    this.instructor = instructor
    this.publicationDate = publicationDate
    this.published = published
    this.rating = rating
    this.status = this.published === true ? 'Published' : 'Unpublished'
  }
}
