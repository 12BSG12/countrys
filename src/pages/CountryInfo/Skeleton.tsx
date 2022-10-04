import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={80}
    height={20}
    viewBox="0 0 80 20"
  >
    <rect x="0" y="0" rx="8" ry="8" width="80" height="20" />
  </ContentLoader>
)