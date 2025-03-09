import { cn } from "@/lib/util"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const LockIcon = ({ size = 30, className, ...props }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M21.8243 12.4401H7.37505C6.40637 12.4401 5.62109 13.2253 5.62109 14.194V23.6227C5.62109 24.5914 6.40637 25.3767 7.37505 25.3767H21.8243C22.793 25.3767 23.5783 24.5914 23.5783 23.6227V14.194C23.5783 13.2253 22.793 12.4401 21.8243 12.4401Z" stroke="#C4C5CC" strokeWidth="2.83908" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.30304 12.4394V10.1008C9.30304 7.17749 11.6788 4.80176 14.602 4.80176C17.5253 4.80176 19.901 7.17749 19.901 10.1008V12.4394" stroke="#C4C5CC" strokeWidth="2.83908" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0433 17.6651C16.0433 18.4622 15.3972 19.1083 14.6001 19.1083C13.803 19.1083 13.1569 18.4622 13.1569 17.6651C13.1569 16.868 13.803 16.2219 14.6001 16.2219C15.3972 16.2219 16.0433 16.868 16.0433 17.6651Z" fill="#C4C5CC" stroke="#C4C5CC" strokeWidth="1.41954"/>
    <path d="M14.2049 21.586V18.3747H14.892V21.586H14.2049Z" fill="#FF0000" stroke="#C4C5CC" strokeWidth="1.41954"/>
  </svg>
);

export const PersonIcon = ({ size = 30, className, ...props }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 30 29" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M15.0596 15.2585C17.8521 15.2585 20.1159 12.9959 20.1159 10.2048C20.1159 7.41373 17.8521 5.15112 15.0596 5.15112C12.2671 5.15112 10.0034 7.41373 10.0034 10.2048C10.0034 12.9959 12.2671 15.2585 15.0596 15.2585Z" stroke="#C4C5CC" strokeWidth="2.83908" strokeMiterlimit="10"/>
    <path d="M5.47302 24.852C5.47302 19.5616 9.76723 15.2695 15.0603 15.2695C20.3534 15.2695 24.6476 19.5616 24.6476 24.852" stroke="#C4C5CC" strokeWidth="2.83908" strokeMiterlimit="10"/>
  </svg>
); 