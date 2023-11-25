import React from 'react';
import { FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'brands',
  },
  {
    id: 2,
    url: '/about',
    text: 'shop',
  },
  {
    id: 3,
    url: '/projects',
    text: 'premium',
  },
  {
    id: 4,
    url: '/contact',
    text: 'gift cards',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTiktok />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <BiUser />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <IoIosSearch />,
  },
  {
    id: 6,
    url: 'https://www.twitter.com',
    icon: <FiShoppingBag />,
  },
]
