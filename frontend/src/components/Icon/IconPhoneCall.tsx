import { FC } from 'react';

interface IconPhoneCallProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconPhoneCall: FC<IconPhoneCallProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            {!fill ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path
                        d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z"
                        fill="currentColor"
                    />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        d="M11.6671 10.9108L11.3255 11.2704C11.3255 11.2704 10.5136 12.1252 8.29734 9.79192C6.08109 7.45863 6.89303 6.60381 6.89303 6.60381L7.10814 6.37733C7.63805 5.81943 7.68801 4.92372 7.22568 4.26983L6.27994 2.93221C5.70771 2.12287 4.60197 2.01596 3.94609 2.70648L2.76889 3.94585C2.44367 4.28824 2.22574 4.73209 2.25217 5.22445C2.31978 6.48409 2.85804 9.19429 5.86152 12.3564C9.04661 15.7097 12.0351 15.8429 13.2572 15.7223C13.6438 15.6842 13.9799 15.4757 14.2508 15.1905L15.3163 14.0688C16.0354 13.3117 15.8327 12.0136 14.9125 11.484L13.4796 10.6592C12.8754 10.3115 12.1393 10.4136 11.6671 10.9108Z"
                        fill="currentColor"
                    />
                    <path
                        d="M9.94462 1.40987C9.99426 1.10321 10.2842 0.895175 10.5908 0.944823C10.6098 0.948457 10.6709 0.959872 10.7029 0.966999C10.7669 0.981252 10.8562 1.0032 10.9675 1.03561C11.1901 1.10045 11.501 1.20725 11.8742 1.37835C12.6214 1.72092 13.6158 2.32017 14.6476 3.35202C15.6795 4.38387 16.2787 5.37823 16.6213 6.12544C16.7924 6.49865 16.8992 6.8096 16.964 7.03219C16.9965 7.14349 17.0184 7.23276 17.0327 7.29676C17.0398 7.32876 17.045 7.35446 17.0486 7.37344L17.0529 7.39684C17.1026 7.7035 16.8965 8.00539 16.5898 8.05504C16.284 8.10455 15.9959 7.89752 15.945 7.59229C15.9435 7.5841 15.9392 7.56208 15.9346 7.54131C15.9253 7.49978 15.9093 7.43391 15.8839 7.34679C15.8332 7.17254 15.745 6.91354 15.5987 6.59428C15.3063 5.95655 14.7805 5.07591 13.8521 4.14752C12.9237 3.21912 12.0431 2.69337 11.4054 2.401C11.0861 2.25463 10.8271 2.16648 10.6529 2.11573C10.5657 2.09036 10.4563 2.06522 10.4147 2.05597C10.1095 2.00511 9.89511 1.71566 9.94462 1.40987Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1143 3.99697C10.1996 3.69827 10.511 3.5253 10.8097 3.61065L10.6552 4.1515C10.8097 3.61065 10.8097 3.61065 10.8097 3.61065L10.8108 3.61096L10.8119 3.61129L10.8144 3.61202L10.8202 3.61375L10.8351 3.61838C10.8464 3.62199 10.8605 3.6267 10.8773 3.63268C10.911 3.64463 10.9555 3.66163 11.0102 3.68503C11.1194 3.73186 11.2687 3.80417 11.4521 3.91271C11.8192 4.12997 12.3203 4.49085 12.9091 5.07958C13.4978 5.66831 13.8587 6.16945 14.0759 6.53655C14.1845 6.71993 14.2568 6.86923 14.3036 6.97849C14.327 7.0331 14.344 7.07762 14.356 7.1113C14.3619 7.12814 14.3667 7.14226 14.3703 7.15357L14.3749 7.16841L14.3766 7.17422L14.3774 7.17672L14.3777 7.17787C14.3777 7.17787 14.378 7.17895 13.8371 7.33348L14.378 7.17895C14.4633 7.47766 14.2904 7.789 13.9917 7.87434C13.6955 7.95896 13.3869 7.78964 13.2985 7.4956L13.2957 7.48751C13.2917 7.47624 13.2835 7.45405 13.2696 7.42165C13.2418 7.3569 13.1915 7.25098 13.1078 7.10953C12.9406 6.82698 12.6385 6.40004 12.1136 5.87508C11.5886 5.35011 11.1617 5.04808 10.8791 4.88086C10.7377 4.79714 10.6317 4.74682 10.567 4.71907C10.5346 4.70518 10.5124 4.69691 10.5011 4.69291L10.493 4.69014C10.199 4.60173 10.0297 4.29314 10.1143 3.99697Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </>
    );
};
export default IconPhoneCall;
