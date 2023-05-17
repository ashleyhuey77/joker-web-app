import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import {Sidebar} from './Sidebar.js';
import {BrowserRouter} from "react-router-dom";
import {waitFor} from "@testing-library/dom";
import {Content} from "./Content.js";
import {TestProgress} from "../../views/dashboard/ProgressBar.js";

const mockPBar = TestProgress;

jest.mock('../views/dashboard/ProgressBar', () => ({
  TestProgress: () => mockPBar,
}));

beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    };
  };
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver = ResizeObserver;
});

function NavBar() {
  return (
    <BrowserRouter history={"/"}>
      <Sidebar />
      <Content />
    </BrowserRouter>
  );
}

describe("Side Navigation Bar", () => {
  test("Should render all links correctly", () => {
    render(<NavBar/>);
    const dash = screen.getByText('Dashboard')
    const suites = screen.getByText('Suites')
    expect(dash).toBeVisible();
    expect(dash).toBeInTheDocument();
    expect(suites).toBeVisible();
    expect(suites).toBeInTheDocument();
  });

  test("Should render dashboard when dashboard link is clicked", async () => {
    window.location.href = 'http://localhost/'
    render(<NavBar/>);
    expect(window.location.href).toBe('http://localhost/');
    fireEvent.click(screen.getByRole('link', { name: 'Dashboard' }));
    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute('href', '/dashboard');
      expect(window.location.href).toBe('http://localhost/dashboard');
      expect(screen.getByText('Total Pass %')).toBeVisible();
      expect(screen.getByText('Test Cases')).toBeVisible();
      expect(screen.getByText('Environment')).toBeVisible();
      expect(window.document.querySelector('.trends.card')).toBeVisible();
      expect(window.document.querySelectorAll('.trends.card').length).toBe(1);
    })
  });
  test("Should render suites when suites link is clicked", async () => {
    window.location.href = 'http://localhost/'
    render(<NavBar/>);
    expect(window.location.href).toBe('http://localhost/dashboard');
    fireEvent.click(screen.getByRole('link', { name: 'Suites' }));
    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Suites' })).toHaveAttribute('href', '/suites');
      expect(window.location.href).toBe('http://localhost/suites');
      expect(screen.queryByText('Total Pass %')).toBeNull();
      expect(screen.queryByText('Test Cases')).toBeNull();
      expect(screen.queryByText('Environment')).toBeNull();
      expect(window.document.querySelector('.trends.card')).toBeNull();
      expect(window.document.querySelectorAll('.trends.card').length).toBe(0);
      expect(screen.getByText('Steps')).toBeVisible();
    })
  });
});
