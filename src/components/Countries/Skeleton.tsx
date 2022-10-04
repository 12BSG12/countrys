import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={272}
    height={310}
    viewBox="0 0 272 310"
  >
    <rect x="0" y="0" rx="8" ry="8" width="272" height="310" />
  </ContentLoader>
)