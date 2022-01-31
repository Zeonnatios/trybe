import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';  
import '@testing-library/jest-dom';
import Joke from './Joke';


describe("Testing Joke App", () => {

  test('Testing if render all elements.', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ 
        id: "UKeFB59EQf",
        joke: "Why did the coffee file a police report? It got mugged.",
        status: 200
       })
    })



    render(<Joke />);
    
    const joke = await screen.findByTestId("joke")
    expect(joke).toBeInTheDocument();
    expect(joke).toHaveTextContent("Why did the coffee file a police report? It got mugged.")

  });

});
