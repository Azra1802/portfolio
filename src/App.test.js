import { render, screen, fireEvent, waitFor  , within } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';


describe("Contact Component", () => {
    test("renders 'Contact Me' button", () => {
      render(<Contact />);
      const buttonElement = screen.getByText(/contact me/i);
      expect(buttonElement).toBeInTheDocument();
    });
  
    test("displays form on button click", async () => {
      render(<Contact />);
      const buttonElement = screen.getByText(/contact me/i);
      fireEvent.click(buttonElement);
  
      
      await waitFor(() => screen.findByPlaceholderText(/your name/i), {timeout: 3000}); 
  
      expect(await screen.findByPlaceholderText(/your name/i)).toBeInTheDocument();
      expect(await screen.findByPlaceholderText(/your email/i)).toBeInTheDocument();
      expect(await screen.findByPlaceholderText(/your message/i)).toBeInTheDocument();
    });
  
    test("allows user to type into input fields", async () => {
      render(<Contact />);
      fireEvent.click(screen.getByText(/contact me/i));
      await waitFor(() => screen.findByPlaceholderText(/your name/i), {timeout: 3000}); 
      const nameInput = screen.getByPlaceholderText(/your name/i);
      const emailInput = screen.getByPlaceholderText(/your email/i);
      const messageInput = screen.getByPlaceholderText(/your message/i);
      fireEvent.change(nameInput, { target: { value: "Testic" } });
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(messageInput, { target: { value: "Testicc" } });
      expect(nameInput.value).toBe("Testic");
      expect(emailInput.value).toBe("test@example.com");
      expect(messageInput.value).toBe("Testicc");
    });
  
    test("renders 'Send Message' button", async () => {
      render(<Contact />);
      fireEvent.click(screen.getByText(/contact me/i));
      await waitFor(() => screen.findByText(/send message/i), {timeout: 3000}); 
      const sendButton = screen.getByText(/send message/i);
      expect(sendButton).toBeInTheDocument();
    });
  });

  describe("Projects Component", () => {
    test("renders project cards", () => {
      render(<Projects />);
  
      expect(screen.getByText("Biom - Eco Products Website")).toBeInTheDocument();
      expect(screen.getByText("Blue Sky Apartments")).toBeInTheDocument();
      expect(screen.getByText("Portfolio (this one)")).toBeInTheDocument();
    });
  
    test('opens modal when a project card is clicked', async () => {
      render(<Projects />);
    
      
      const projectImages = screen.getAllByRole('img'); 
      const firstCardImage = projectImages[0];
    
     
      fireEvent.click(firstCardImage.closest('.project-card'));
    
     
      const modal = await screen.findByRole('dialog');
    
      expect(modal).toBeVisible();
    });


    test('closes modal when close button is clicked', async () => {
        render(<Projects />);
      
        
        const projectCard = screen.getByAltText('Biom - Eco Products Website');
        fireEvent.click(projectCard);
      
        await waitFor(() => {
          const modalTitle = screen.getByRole('heading', { name: /Biom - Eco Products Website/i });
          expect(modalTitle).toBeInTheDocument();  
     },);
        
        const closeButtons = screen.getAllByRole('button', { name: /close/i });
     
        fireEvent.click(closeButtons[0]);
        
        await waitFor(() => {
           
            expect(closeButtons[0]).not.toBeInTheDocument();  
          },{timeout:2000});
      });
      
  
      test('navigating through images in the modal', async () => {
        render(<Projects />);

        const projectCard = screen.getByText(/Biom - Eco Products Website/i);
        fireEvent.click(projectCard);
    
        const modalTitle = await screen.findByRole('heading', { name: /Biom - Eco Products Website/i });
        expect(modalTitle).toBeInTheDocument();

        const modalImage = screen.getByAltText(/Project 1/i);
        expect(modalImage).toBeInTheDocument();
    
        const nextButton = screen.getByText('❯');
        fireEvent.click(nextButton);
    
        await waitFor(() => {
          const updatedModalImage = screen.getByAltText(/Project 2/i);
          expect(updatedModalImage).toBeInTheDocument();
        });
    
        const prevButton = screen.getByText('❮');
        fireEvent.click(prevButton);
    
        await waitFor(() => {
          const updatedModalImage = screen.getByAltText(/Project 1/i);
          expect(updatedModalImage).toBeInTheDocument();
        });
    
        
        const closeButton = screen.getByLabelText(/close/i);
        fireEvent.click(closeButton);
    
        await waitFor(() => {
          expect(screen.queryByRole('dialog')).not.toBeInTheDocument(); 
        });
      });
 
  });

  describe('Header component', () => {
    test('renders logo text', () => {
      render(<Header />);
      const logo = screen.getByText(/MyPortfolio/i);
      expect(logo).toBeInTheDocument();
    });
  
    test('clicking nav link scrolls to target section', () => {
      render( <Header />);
  
      const initialScrollPosition = window.scrollY;
      const aboutLink = screen.getByText('About');
      fireEvent.click(aboutLink);
  
      setTimeout(() => {
        expect(window.scrollY).not.toBe(initialScrollPosition);  
      }, 600); 
  
    });
  
    test('toggles menu on hamburger button click', () => {
      render(<Header />);
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
  
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  
      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  
      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });
  
    test('clicking a nav link closes the menu', () => {
      render(<Header />);
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
  
      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
 
      const homeLink = screen.getByText(/Home/i);
      fireEvent.click(homeLink);
  
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });
  });