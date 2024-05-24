export interface Testimonial {
    name: string;
    reviewContent: string;
    rating: number;
    date: Date;
  }
  
 export const testimonials: Testimonial[] = [
    {
      name: "LusDen",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      rating: 4,
      date: new Date(2023, 4, 23)
    },
    {
      name: "Jane Doe",
      reviewContent: "Aliquam non lorem et ante convallis tincidunt ut eu diam. Sed dapibus lectus ac mauris finibus, nec aliquet arcu faucibus.",
      rating: 5,
      date: new Date(2023, 5, 15)
    },
    {
      name: "John Smith",
      reviewContent: "Phasellus facilisis ligula at urna suscipit, et pharetra magna vestibulum. In vel justo quis eros dignissim facilisis.",
      rating: 3,
      date: new Date(2023, 6, 10)
    },
    {
      name: "Alice Johnson",
      reviewContent: "Curabitur at velit ut eros feugiat lacinia. Nullam sit amet nunc auctor, consequat magna eu, dignissim risus.",
      rating: 4,
      date: new Date(2023, 7, 20)
    },
    {
      name: "Bob Brown",
      reviewContent: "Suspendisse potenti. Mauris mollis risus eu metus viverra, a posuere metus dictum. Quisque ac ex vitae sapien tincidunt cursus.",
      rating: 5,
      date: new Date(2023, 8, 5)
    },
    {
      name: "Carol White",
      reviewContent: "Vestibulum vehicula lacus non nisl fermentum, a euismod ligula volutpat. Integer at velit nec sem fringilla venenatis.",
      rating: 2,
      date: new Date(2023, 9, 12)
    }
  ];
  