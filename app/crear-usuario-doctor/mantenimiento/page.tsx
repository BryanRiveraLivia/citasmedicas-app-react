"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins, Roboto } from "next/font/google";
import "./page.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";
import { ImPaste } from "react-icons/im";
import { AiOutlineFileDone, AiOutlineMedicineBox } from "react-icons/ai";
import { IoCalendarOutline, IoCloseOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";
import parse from "html-react-parser";
import "react-phone-number-input/style.css";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Modal from "react-bootstrap/Modal";

const poppinsMenu = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const robotoMenu = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const svgUsuario = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.77138 8.1525C9.69102 8.145 9.59459 8.145 9.5062 8.1525C7.5937 8.0925 6.07495 6.63 6.07495 4.83C6.07495 2.9925 7.66602 1.5 9.64281 1.5C11.6116 1.5 13.2107 2.9925 13.2107 4.83C13.2026 6.63 11.6839 8.0925 9.77138 8.1525Z" stroke="#5ABC91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75365 10.92C3.80901 12.135 3.80901 14.115 5.75365 15.3225C7.96347 16.7025 11.5876 16.7025 13.7974 15.3225C15.742 14.1075 15.742 12.1275 13.7974 10.92C11.5956 9.5475 7.97151 9.5475 5.75365 10.92Z" stroke="#5ABC91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svgUsuario2 = `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1765 6.10465C15.1765 6.24343 15.1207 6.37652 15.0214 6.47465C14.9221 6.57278 14.7875 6.62791 14.6471 6.62791H11.1176C10.9772 6.62791 10.8426 6.57278 10.7433 6.47465C10.644 6.37652 10.5882 6.24343 10.5882 6.10465C10.5882 5.96587 10.644 5.83278 10.7433 5.73465C10.8426 5.63652 10.9772 5.5814 11.1176 5.5814H14.6471C14.7875 5.5814 14.9221 5.63652 15.0214 5.73465C15.1207 5.83278 15.1765 5.96587 15.1765 6.10465ZM14.6471 8.37209H11.1176C10.9772 8.37209 10.8426 8.42722 10.7433 8.52535C10.644 8.62348 10.5882 8.75657 10.5882 8.89535C10.5882 9.03412 10.644 9.16722 10.7433 9.26535C10.8426 9.36348 10.9772 9.4186 11.1176 9.4186H14.6471C14.7875 9.4186 14.9221 9.36348 15.0214 9.26535C15.1207 9.16722 15.1765 9.03412 15.1765 8.89535C15.1765 8.75657 15.1207 8.62348 15.0214 8.52535C14.9221 8.42722 14.7875 8.37209 14.6471 8.37209ZM9.07941 10.8576C9.106 10.9887 9.08076 11.125 9.00887 11.2383C8.93699 11.3516 8.82391 11.4335 8.69288 11.467C8.56184 11.5005 8.42281 11.4831 8.30434 11.4184C8.18587 11.3537 8.09696 11.2466 8.05588 11.1192C7.93031 10.6305 7.6435 10.1971 7.24081 9.88752C6.83811 9.57795 6.34251 9.40988 5.83235 9.40988C5.3222 9.40988 4.82659 9.57795 4.4239 9.88752C4.02121 10.1971 3.7344 10.6305 3.60882 11.1192C3.57952 11.2314 3.51337 11.3308 3.42075 11.4018C3.32813 11.4728 3.21428 11.5114 3.09706 11.5116L2.96471 11.4942C2.82909 11.4593 2.71301 11.3727 2.64189 11.2534C2.57077 11.134 2.55042 10.9917 2.58529 10.8576C2.69578 10.4321 2.89075 10.0326 3.15887 9.68222C3.42698 9.33189 3.76289 9.03773 4.14706 8.81686C3.72677 8.4739 3.42383 8.01106 3.27963 7.49157C3.13542 6.97208 3.15698 6.42125 3.34135 5.91432C3.52572 5.40739 3.86391 4.96906 4.30975 4.65921C4.75558 4.34935 5.28733 4.18307 5.83235 4.18307C6.37738 4.18307 6.90912 4.34935 7.35496 4.65921C7.80079 4.96906 8.13899 5.40739 8.32336 5.91432C8.50773 6.42125 8.52928 6.97208 8.38508 7.49157C8.24087 8.01106 7.93794 8.4739 7.51765 8.81686C7.90182 9.03773 8.23772 9.33189 8.50584 9.68222C8.77395 10.0326 8.96892 10.4321 9.07941 10.8576ZM5.83235 8.37209C6.14648 8.37209 6.45355 8.28003 6.71473 8.10754C6.97591 7.93505 7.17948 7.68989 7.29969 7.40305C7.4199 7.11621 7.45135 6.80058 7.39007 6.49608C7.32879 6.19157 7.17752 5.91187 6.9554 5.69233C6.73329 5.4728 6.45029 5.32329 6.1422 5.26272C5.83412 5.20215 5.51477 5.23324 5.22456 5.35205C4.93435 5.47086 4.6863 5.67206 4.51178 5.93021C4.33727 6.18836 4.24412 6.49185 4.24412 6.80233C4.24643 7.21795 4.41451 7.6159 4.71186 7.90979C5.00921 8.20368 5.41184 8.3698 5.83235 8.37209ZM18 1.22093V13.7791C18 14.1029 17.8699 14.4134 17.6382 14.6424C17.4065 14.8714 17.0923 15 16.7647 15H1.23529C0.907674 15 0.593472 14.8714 0.361809 14.6424C0.130147 14.4134 0 14.1029 0 13.7791V1.22093C0 0.897119 0.130147 0.586571 0.361809 0.357602C0.593472 0.128633 0.907674 0 1.23529 0H16.7647C17.0923 0 17.4065 0.128633 17.6382 0.357602C17.8699 0.586571 18 0.897119 18 1.22093ZM16.9412 1.22093C16.9412 1.17467 16.9226 1.13031 16.8895 1.0976C16.8564 1.06489 16.8115 1.04651 16.7647 1.04651H1.23529C1.18849 1.04651 1.14361 1.06489 1.11051 1.0976C1.07742 1.13031 1.05882 1.17467 1.05882 1.22093V13.7791C1.05882 13.8253 1.07742 13.8697 1.11051 13.9024C1.14361 13.9351 1.18849 13.9535 1.23529 13.9535H16.7647C16.8115 13.9535 16.8564 13.9351 16.8895 13.9024C16.9226 13.8697 16.9412 13.8253 16.9412 13.7791V1.22093Z" fill="#5ABC91"/>
</svg>
`;

const svgPassword = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#5ABC91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#5ABC91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const svgTelefono = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_120_11781)">
<path d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z" stroke="#5ABC91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_120_11781">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const iconoMenuTask = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5561 23.2C21.7181 23.2 21.8735 23.1368 21.9881 23.0243C22.1027 22.9117 22.1671 22.7591 22.1671 22.6V10.6H16.6682C16.0201 10.6 15.3984 10.3471 14.9401 9.89706C14.4818 9.44697 14.2243 8.83652 14.2243 8.2V2.8H6.89252C6.73047 2.8 6.57507 2.86321 6.46049 2.97574C6.3459 3.08826 6.28153 3.24087 6.28153 3.4V9.7C6.28153 9.93869 6.18498 10.1676 6.0131 10.3364C5.84123 10.5052 5.60812 10.6 5.36506 10.6C5.122 10.6 4.88889 10.5052 4.71702 10.3364C4.54515 10.1676 4.44859 9.93869 4.44859 9.7V3.4C4.44859 2.76348 4.70607 2.15303 5.1644 1.70294C5.62272 1.25286 6.24435 1 6.89252 1H14.4345C14.4687 1 14.5017 1.0048 14.5347 1.0084C14.5586 1.01231 14.5826 1.01511 14.6068 1.0168C14.8695 1.0348 15.1285 1.084 15.3693 1.1824C15.4389 1.2112 15.5061 1.2496 15.5721 1.2868L15.6332 1.3216L15.6907 1.3504C15.7249 1.36568 15.7579 1.38333 15.7896 1.4032C15.8849 1.4668 15.9705 1.5424 16.0572 1.6192L16.1012 1.6552C16.1222 1.66992 16.1422 1.68596 16.1611 1.7032L23.2839 8.6968C23.7423 9.14678 23.9999 9.75713 24 10.3936V22.6C24 23.2365 23.7425 23.847 23.2842 24.2971C22.8259 24.7471 22.2042 25 21.5561 25H6.89252C6.24435 25 5.62272 24.7471 5.1644 24.2971C4.70607 23.847 4.44859 23.2365 4.44859 22.6V18.1C4.44859 17.8613 4.54515 17.6324 4.71702 17.4636C4.88889 17.2948 5.122 17.2 5.36506 17.2C5.60812 17.2 5.84123 17.2948 6.0131 17.4636C6.18498 17.6324 6.28153 17.8613 6.28153 18.1V22.6C6.28153 22.7591 6.3459 22.9117 6.46049 23.0243C6.57507 23.1368 6.73047 23.2 6.89252 23.2H21.5561ZM20.796 8.8L16.0572 4.1452V8.2C16.0572 8.35913 16.1216 8.51174 16.2362 8.62426C16.3508 8.73679 16.5062 8.8 16.6682 8.8H20.796ZM2.92113 14.2H5.98215L7.88475 9.9388C7.95186 9.78802 8.05979 9.65819 8.19679 9.56343C8.33379 9.46868 8.49463 9.41263 8.66181 9.40137C8.82898 9.39011 8.9961 9.42408 9.14499 9.49958C9.29389 9.57508 9.41885 9.68923 9.50629 9.8296L9.51363 9.8416L9.57472 9.9652L12.5233 17.1976L14.2671 14.6776C14.3337 14.5544 14.4285 14.4482 14.5441 14.3672C14.6596 14.2862 14.7928 14.2326 14.933 14.2108L14.9453 14.2084L15.076 14.2H17.5199C17.7518 14.1988 17.9755 14.284 18.146 14.4384C18.3164 14.5928 18.4209 14.805 18.4384 15.032C18.456 15.2591 18.3852 15.4842 18.2403 15.6621C18.0955 15.8399 17.8874 15.9572 17.658 15.9904L17.6458 15.9916L17.5199 16H15.621L13.2027 19.7128C13.1273 19.8541 13.015 19.9732 12.8773 20.0578C12.7396 20.1425 12.5815 20.1897 12.4191 20.1946C12.2567 20.1994 12.0959 20.1618 11.9532 20.0856C11.8105 20.0094 11.6909 19.8973 11.6068 19.7608L11.6007 19.75L11.5396 19.6288L8.68514 12.6268L7.4204 15.4612C7.35923 15.5984 7.26416 15.7184 7.14382 15.8104C7.02347 15.9024 6.88165 15.9634 6.73122 15.988L6.71655 15.9904L6.58214 16H2.92113C2.68925 16.0012 2.46554 15.916 2.29509 15.7616C2.12464 15.6072 2.02013 15.3951 2.00262 15.168C1.98511 14.9409 2.0559 14.7158 2.20072 14.5379C2.34555 14.3601 2.55364 14.2428 2.78305 14.2096L2.79527 14.2084L2.92113 14.2Z" fill="white"/>
</svg>
`;

const snack_doctores = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.73872 3.0598L6.7706 2.92068C6.83147 2.66215 6.93117 2.28189 7.13695 1.90742C7.34679 1.526 7.67198 1.13936 8.18209 0.884889C8.69046 0.631575 9.32752 0.537089 10.1153 0.641429C10.9848 0.757362 12.7313 1.04488 14.2744 1.82975C15.8262 2.61925 17.28 3.97742 17.28 6.23928C17.28 7.40789 16.8278 8.66171 16.3896 9.47904C16.1792 9.87206 15.9293 10.2477 15.6789 10.45C15.6215 10.4964 15.5398 10.5543 15.4384 10.5949C15.1601 11.5094 14.6062 12.3156 13.8524 12.9033C13.0986 13.491 12.1816 13.8315 11.2269 13.8784C10.2722 13.9252 9.32631 13.676 8.5186 13.1648C7.71089 12.6537 7.08076 11.9055 6.71437 11.0227L6.70046 11.025L6.49468 10.7752L6.94218 10.4065L6.49468 10.7752L6.4941 10.774L6.49294 10.7729L6.49004 10.7688L6.48019 10.7572C6.43058 10.6955 6.38283 10.6323 6.33701 10.5677C6.21184 10.394 6.09387 10.2154 5.98341 10.032C5.71097 9.58106 5.3823 8.93879 5.17188 8.18928C4.96204 7.43977 4.86581 6.56099 5.08609 5.65439C5.30056 4.77214 5.80661 3.9038 6.72307 3.1282L6.73872 3.0598ZM7.71256 10.3856C7.96397 11.1086 8.44674 11.7285 9.08612 12.1494C9.7255 12.5702 10.4858 12.7685 11.2493 12.7135C12.0127 12.6585 12.7368 12.3533 13.3092 11.8452C13.8817 11.337 14.2706 10.6543 14.4158 9.90278L14.4813 9.92481C14.479 9.89201 14.4779 9.85914 14.4779 9.82626C14.4779 8.86691 14.3445 8.1974 14.2205 7.78004C14.1963 7.6988 14.1694 7.61837 14.1399 7.53889L14.1161 7.54005H14.093C13.6595 7.54941 13.2262 7.51641 12.7991 7.44151C11.8039 7.27341 10.4561 6.85373 8.869 5.88162C8.83422 5.9593 8.79944 6.04683 8.76466 6.14421C8.65104 6.46593 8.55772 6.84793 8.47714 7.25138C8.40584 7.60671 8.3473 7.96437 8.29165 8.29942L8.2702 8.43158C8.2105 8.79098 8.15079 9.14399 8.08123 9.39963C7.9595 9.84365 7.83545 10.159 7.71256 10.3851V10.3856ZM6.90103 9.30572C6.63921 8.85631 6.43362 8.37642 6.2889 7.87684C6.11558 7.25891 6.05181 6.58998 6.21296 5.92858C6.36947 5.28515 6.74799 4.60867 7.52649 3.96756C7.66677 3.8725 7.73053 3.74497 7.74792 3.71077V3.71019C7.77836 3.64752 7.80281 3.58211 7.82096 3.51484C7.83951 3.44876 7.8598 3.35833 7.87893 3.27718L7.89921 3.18617C7.95428 2.95256 8.02558 2.69809 8.15311 2.46564C8.27716 2.24073 8.447 2.04828 8.69973 1.92249C8.95363 1.79555 9.34664 1.7086 9.96225 1.79091C10.8045 1.90279 12.3887 2.17117 13.7486 2.8633C15.0993 3.5502 16.1206 4.59012 16.1206 6.23928C16.1206 6.99864 15.8656 7.86235 15.5584 8.54346C15.5004 8.09943 15.4169 7.73656 15.3311 7.44905C15.2713 7.24355 15.1967 7.04266 15.108 6.84793C15.0745 6.77576 15.0377 6.70516 14.9978 6.63635L14.988 6.6207L14.9845 6.6149L14.9828 6.61201L14.9816 6.61027L14.4947 6.92329L14.9816 6.61027L14.7671 6.27754L14.3834 6.35463L14.3753 6.35637L14.319 6.36391C14.2328 6.37352 14.1461 6.37932 14.0593 6.3813C13.7019 6.3882 13.3447 6.36025 12.9928 6.29782C12.0577 6.14016 10.6839 5.71062 9.01507 4.5994L8.60931 4.32869L8.27368 4.68229C7.99718 4.97328 7.80937 5.37036 7.67198 5.757C7.53171 6.15407 7.42563 6.59751 7.34041 7.02299C7.26977 7.38507 7.20561 7.74839 7.14796 8.11276L7.12594 8.24261C7.06391 8.61997 7.01348 8.90807 6.96247 9.09472C6.94344 9.16547 6.92295 9.23582 6.90103 9.30572ZM14.9474 9.55034L14.9497 9.54918L14.9474 9.55034ZM14.9497 9.54918L14.9474 9.55034L14.9491 9.54918H14.9497Z" fill="#677285"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.47208 14.3797C7.34919 14.1351 7.19789 13.8331 6.94226 13.8916C3.80974 14.6046 0.565918 16.663 0.565918 18.8519V21.9995H21.4339V18.8519C21.4339 17.1279 19.4213 15.4846 17.036 14.516L17.0331 14.5102C17.0305 14.5049 17.0278 14.4997 17.025 14.4945L17.0059 14.5038C16.3723 14.2487 15.7126 14.04 15.0576 13.8916C14.766 13.825 14.4646 14.2261 14.333 14.4771H7.52193C7.5057 14.447 7.48947 14.4133 7.47208 14.3797ZM15.2912 15.1449C15.5445 15.215 15.7967 15.2939 16.0454 15.3808C16.0523 15.5791 16.0372 15.8132 16.0048 16.0521C15.9717 16.2993 15.919 16.5436 15.8471 16.7825H15.0576C14.95 16.7825 14.8445 16.8125 14.753 16.8691C14.6614 16.9258 14.5875 17.0067 14.5394 17.103L13.9597 18.2623C13.9194 18.3428 13.8984 18.4315 13.8983 18.5215V19.6808C13.8983 19.8345 13.9593 19.982 14.0681 20.0907C14.1768 20.1994 14.3242 20.2605 14.4779 20.2605H15.6373V19.1011H15.0576V18.6583L15.4158 17.9418H17.018L17.3763 18.6583V19.1011H16.7966V20.2605H17.9559C18.1097 20.2605 18.2571 20.1994 18.3658 20.0907C18.4745 19.982 18.5356 19.8345 18.5356 19.6808V18.5215C18.5355 18.4315 18.5145 18.3428 18.4742 18.2623L17.8945 17.103C17.8464 17.0067 17.7724 16.9258 17.6809 16.8691C17.5894 16.8125 17.4839 16.7825 17.3763 16.7825H17.0482C17.1198 16.4757 17.1679 16.1639 17.1919 15.8498C17.7571 16.117 18.2823 16.4236 18.7373 16.7552C19.8515 17.5679 20.2746 18.3284 20.2746 18.8519V20.8401H1.72525V18.8519C1.72525 18.3284 2.14841 17.5679 3.26253 16.7552C3.82249 16.3465 4.49085 15.9767 5.20732 15.6706C5.22722 16.1326 5.30134 16.5906 5.42817 17.0352L5.43281 17.0514C5.08626 17.2707 4.82834 17.6053 4.70459 17.9963C4.58085 18.3872 4.59924 18.8093 4.75652 19.188C4.91381 19.5667 5.19986 19.8777 5.56416 20.0659C5.92846 20.2542 6.34758 20.3077 6.74747 20.2169C7.14737 20.1261 7.50233 19.8969 7.74965 19.5698C7.99697 19.2428 8.12074 18.8388 8.09911 18.4293C8.07747 18.0198 7.91182 17.6311 7.63141 17.3319C7.351 17.0327 6.97387 16.8422 6.56664 16.794C6.49257 16.5515 6.43829 16.3034 6.40433 16.0521C6.37206 15.8273 6.35868 15.6003 6.36433 15.3733C6.36601 15.3299 6.36891 15.2866 6.37303 15.2434C6.44259 15.222 6.51215 15.2011 6.58171 15.1814L6.82227 15.637H15.0327L15.2912 15.1455V15.1449ZM6.36259 19.1104C6.67445 19.1104 6.94226 18.8553 6.94226 18.522C6.94226 18.1893 6.67445 17.9337 6.36259 17.9337C6.05073 17.9337 5.78293 18.1887 5.78293 18.522C5.78293 18.8548 6.05073 19.1104 6.36259 19.1104Z" fill="#677285"/>
</svg>
`;

const snack_pacientes = `<svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1601 10.87C19.0601 10.86 18.9401 10.86 18.8301 10.87C16.4501 10.79 14.5601 8.84 14.5601 6.44C14.5601 3.99 16.5401 2 19.0001 2C21.4501 2 23.4401 3.99 23.4401 6.44C23.4301 8.84 21.5401 10.79 19.1601 10.87Z" stroke="#677285" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.16 14.56C11.74 16.18 11.74 18.82 14.16 20.43C16.91 22.27 21.42 22.27 24.17 20.43C26.59 18.81 26.59 16.17 24.17 14.56C21.43 12.73 16.92 12.73 14.16 14.56Z" stroke="#677285" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.6001 7.34091C7.5376 7.33508 7.4626 7.33508 7.39385 7.34091C5.90635 7.29425 4.7251 6.15675 4.7251 4.75675C4.7251 3.32758 5.9626 2.16675 7.5001 2.16675C9.03135 2.16675 10.2751 3.32758 10.2751 4.75675C10.2688 6.15675 9.0876 7.29425 7.6001 7.34091Z" stroke="#677285" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.47495 9.49325C2.96245 10.4383 2.96245 11.9783 4.47495 12.9174C6.1937 13.9908 9.01245 13.9908 10.7312 12.9174C12.2437 11.9724 12.2437 10.4324 10.7312 9.49325C9.0187 8.42575 6.19995 8.42575 4.47495 9.49325Z" stroke="#677285" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.6001 7.34091C30.5376 7.33508 30.4626 7.33508 30.3938 7.34091C28.9063 7.29425 27.7251 6.15675 27.7251 4.75675C27.7251 3.32758 28.9626 2.16675 30.5001 2.16675C32.0313 2.16675 33.2751 3.32758 33.2751 4.75675C33.2688 6.15675 32.0876 7.29425 30.6001 7.34091Z" stroke="#677285" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.475 9.49325C25.9625 10.4383 25.9625 11.9783 27.475 12.9174C29.1937 13.9908 32.0125 13.9908 33.7312 12.9174C35.2437 11.9724 35.2437 10.4324 33.7312 9.49325C32.0187 8.42575 29.2 8.42575 27.475 9.49325Z" stroke="#677285" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const snack_especialidad = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.8926 0.0987091C6.00911 0.310541 5.15662 0.997702 4.75362 1.82436C4.46946 2.40302 4.38679 2.82668 4.38679 3.69468V4.40767H4.13363C3.99413 4.40767 3.71513 4.44383 3.5188 4.48517C2.34598 4.728 1.41082 5.57016 1.04916 6.70165C0.919994 7.10464 0.899328 7.34747 0.558331 12.7518C0.3465 16.0584 0.207001 18.5952 0.217335 18.9C0.274167 20.2795 1.17833 21.4678 2.50098 21.8863L2.86264 22H11.0001H19.1375L19.4991 21.8863C20.8218 21.4678 21.726 20.2795 21.7828 18.9C21.7931 18.5952 21.6536 16.0584 21.4418 12.7518C21.1008 7.34747 21.0801 7.10464 20.951 6.70165C20.6668 5.80782 20.0055 5.07416 19.1375 4.69183C18.781 4.53167 18.2178 4.40767 17.8665 4.40767H17.6133V3.69468C17.6133 3.27618 17.5823 2.84218 17.5358 2.62519C17.2827 1.42136 16.27 0.377707 15.0817 0.0987091C14.596 -0.0201225 7.36793 -0.0149555 6.8926 0.0987091ZM15.0972 1.25087C15.6759 1.48336 16.1718 1.99486 16.3837 2.58385C16.4715 2.82152 16.4973 3.04368 16.518 3.64301L16.5387 4.40767H15.9652H15.3917V3.96851C15.3917 3.19351 15.0714 2.65619 14.4204 2.35136L14.1259 2.21186H11.0001H7.87426L7.5281 2.38235C6.89777 2.69235 6.60844 3.19351 6.60844 3.96851V4.40767H6.04011H5.47178V3.82384C5.47178 3.12635 5.53895 2.72335 5.71978 2.34102C5.87478 2.01036 6.33978 1.5247 6.64977 1.36453C7.16127 1.1062 7.15093 1.1062 11.1034 1.11653L14.7975 1.12687L15.0972 1.25087ZM14.0122 3.37951C14.2137 3.47251 14.3067 3.68951 14.3067 4.06667V4.40767H11.0001H7.69343V4.06667C7.69343 3.69984 7.78643 3.47251 7.97243 3.37951C8.12743 3.30718 13.8469 3.30201 14.0122 3.37951ZM5.47178 5.90082C5.47178 6.30898 5.37362 6.47948 5.08945 6.57765C4.94996 6.62415 4.87246 6.61898 4.73296 6.55698C4.49013 6.45882 4.38679 6.24698 4.38679 5.85432V5.54432H4.92929H5.47178V5.90082ZM15.3917 5.82849C15.3917 6.64998 15.7534 7.27514 16.3992 7.56964C16.7918 7.75047 17.386 7.74014 17.7787 7.54381C18.3418 7.26481 18.6467 6.79465 18.6932 6.11782L18.7242 5.68382L19.06 5.91632C19.4423 6.17982 19.7885 6.63448 19.9125 7.05814C20.0365 7.47147 20.7391 18.683 20.6668 19.0964C20.517 19.9644 19.8866 20.6412 19.0342 20.8633C18.7655 20.9305 17.7787 20.9408 11.0001 20.9408C4.22146 20.9408 3.23464 20.9305 2.96597 20.8633C2.11348 20.6412 1.48316 19.9644 1.33332 19.0964C1.26099 18.6882 1.96365 7.47147 2.08765 7.06331C2.23748 6.55698 2.67664 6.01965 3.12614 5.78716L3.29147 5.70449L3.31214 6.12815C3.3483 6.78948 3.65314 7.26481 4.22146 7.54381C4.46946 7.6678 4.57796 7.68847 4.92929 7.68847C5.46662 7.6833 5.79211 7.54897 6.13828 7.16664C6.44311 6.83598 6.55677 6.53631 6.59294 5.96799L6.62394 5.54432H11.0052H15.3917V5.82849ZM17.6133 5.85432C17.6133 6.24698 17.51 6.45882 17.2672 6.55698C17.1277 6.61898 17.0502 6.62415 16.9107 6.57765C16.6265 6.47948 16.5283 6.30898 16.5283 5.90082V5.54432H17.0708H17.6133V5.85432Z" fill="#677285"/>
<path d="M9.59466 8.86136C9.48616 8.8872 9.295 9.00603 9.171 9.11969C8.861 9.38836 8.77833 9.66219 8.77833 10.4372V11.021H8.13251C7.25935 11.021 6.96485 11.1553 6.70652 11.6565C6.60836 11.8373 6.60319 11.951 6.61869 13.2892L6.63419 14.7255L6.77369 14.927C6.85119 15.0355 7.00102 15.1853 7.10952 15.2576C7.28518 15.3765 7.34718 15.3868 8.03434 15.4023L8.768 15.4178L8.78867 16.1308C8.80417 16.818 8.80933 16.8541 8.95917 17.0969C9.07283 17.2778 9.19166 17.3863 9.39316 17.4896L9.66699 17.6343H11H12.333L12.6068 17.4896C12.8083 17.3863 12.9271 17.2778 13.0408 17.0969C13.1906 16.8541 13.1958 16.818 13.2113 16.1308L13.232 15.4178L13.9708 15.4023C14.6734 15.3868 14.7096 15.3816 14.9059 15.2473C15.0144 15.1698 15.1643 15.02 15.2366 14.9115C15.3658 14.7255 15.3658 14.7203 15.3813 13.2892C15.3968 11.951 15.3916 11.8373 15.2934 11.6565C15.0351 11.1553 14.7406 11.021 13.8675 11.021H13.2216V10.4475C13.2216 9.72419 13.1596 9.48136 12.9013 9.18686C12.5913 8.83553 12.4105 8.79936 10.9793 8.80453C10.3232 8.8097 9.69799 8.83553 9.59466 8.86136ZM12.085 11.021V12.106H13.1958H14.3066V13.2168V14.3276H13.1958H12.085V15.4385V16.5493H11H9.91499V15.4385V14.3276H8.80417H7.69334V13.2168V12.106H8.80417H9.91499V11.021V9.93602H11H12.085V11.021Z" fill="#677285"/>
</svg>
`;

const icono_filtrar = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.625 1.625H20.375V3.875L12.875 12.125V18.125L9.125 20.375V12.125L1.625 3.875V1.625Z" stroke="#42B784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState<any>("");
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <div className={`app`}>
      <div className="head-usuario p-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <div>
                <img src={`/img/img-perfil.png`} alt="" />
              </div>
              <div className="flex-fill px-2">
                <span className="info-nombre  text-white fw-bold">
                  Hola Juan Gutierrez,
                </span>
                <span className="info-bienvenido d-block text-white">
                  Bienvenido a <p className="d-inline">Financoop</p>
                </span>
              </div>
              <div>
                <BiDotsVerticalRounded
                  className="text-white"
                  style={{ fontSize: "25px" }}
                ></BiDotsVerticalRounded>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-usuario pb-4">
        <div className="zona_busqueda pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <ul className="tipo-de-citas d-flex flex-nowrap overflow-auto justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-start ">
                  <li className={` ${poppinsMenu.className}`}>
                    <Link href={"crear"}>Crear Usuario</Link>
                  </li>
                  <li className={`activo ${poppinsMenu.className}`}>
                    <Link href={"mantenimiento"}>
                      Mantenimiento de usuarios
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 py-4 d-flex align-items-center inputBuscar">
                <input
                  type="text"
                  name=""
                  id=""
                  className="flex-fill"
                  placeholder="Busca por nombre, apellido o perfil"
                />
                <div className="btn-buscar">
                  <button>
                    <FiSearch></FiSearch>
                  </button>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-between mb-3 btn_filtrar">
                <div>120 Usuarios</div>
                <div className="cursor-pointer" onClick={() => setShow(!show)}>
                  <span className="me-2 ">Todos</span>
                  {parse(icono_filtrar)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zona-doctores">
          <div className="porLetra d-flex align-items-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">J</div>
              </div>
            </div>
          </div>
          <div className="porUsuario">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  {Array.from(new Array(3)).map((k) => (
                    <>
                      <div
                        className="tarjetaPaciente d-flex align-items-center"
                        onClick={() => router.push("detalle")}
                      >
                        <img src={"/img/foto-usuario.png"} alt="" />
                        <div className="flex-fill flex-column d-flex infoCard">
                          <span className=" text-left">
                            José Fabricio Retes Ruiz
                          </span>
                          <p className="mb-0 text-left paciente">Paciente</p>
                        </div>
                        <div>
                          <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="porLetra d-flex align-items-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">J</div>
              </div>
            </div>
          </div>
          <div className="porUsuario">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  {Array.from(new Array(3)).map((k) => (
                    <>
                      <div className="tarjetaPaciente d-flex align-items-center">
                        <img src={"/img/foto-usuario.png"} alt="" />
                        <div className="flex-fill flex-column d-flex infoCard">
                          <span className=" text-left">
                            José Fabricio Retes Ruiz
                          </span>
                          <p className="mb-0 text-left paciente">Paciente</p>
                        </div>
                        <div>
                          <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="taskbar">
        <div className="botones py-0  mx-2 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex  justify-content-between align-items-center taskbar-altura">
                <Link href="#" className="activo">
                  <div className="icono icono1">
                    <BsHouse></BsHouse>
                  </div>
                  <div className="txtlabel">Home</div>
                </Link>
                <Link href="#">
                  <div className="icono icono1">{parse(snack_doctores)}</div>
                  <div className="txtlabel">Doctores</div>
                </Link>
                <Link href="#" className="icono-especial">
                  <div>
                    <div className="icono icono3">{parse(iconoMenuTask)}</div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="icono icono2">{parse(snack_pacientes)}</div>
                  <div className="txtlabel">Pacientes</div>
                </Link>
                <Link href="#">
                  <div className="icono icono1">
                    {parse(snack_especialidad)}
                  </div>
                  <div className="txtlabel">Especialidad</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="taskbar_capa d-flex flex-align-content-center align-content-between justify-content-center">
        <div className="deco"></div>
      </div>
      <Modal
        animation={false}
        backdrop={"static"}
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between modalHeader">
                <div className="cursor-pointer" onClick={() => setShow(!show)}>
                  <IoCloseOutline></IoCloseOutline>
                </div>
                {/* la clase activo le dá el color verde*/}
                <div className="txtLimpiar activo">Limpiar</div>
              </div>
              <div className="col-12 modalBody py-4">
                <div className="row">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 mb-4">
                        <span className="filtrarpor">Filtrar por:</span>
                      </div>
                      <div className="col-12 mb-4">
                        <div className="boxFiltro">
                          <span className="titulo">Fecha</span>
                          <ul className="lista-filtro">
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Todos
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  checked={true}
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Paciente
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Doctor
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                A-Z
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Z-A
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="boxFiltro">
                          <span className="titulo">Especialidad</span>
                          <ul className="lista-filtro">
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Especialidad 1
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Especialidad 2
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom"></span>
                                Oftalmología
                              </label>
                            </li>
                            <li>
                              <label className="chktipo2">
                                <input
                                  type="checkbox"
                                  id="recordar-contrasena"
                                />
                                <span className="checkbox-custom disabled"></span>
                                Especialidad 4
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 modalFooter">
                <button
                  disabled={false}
                  className=" text-white fw-bold login rounded-5 border-0 d-block mx-auto"
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;
