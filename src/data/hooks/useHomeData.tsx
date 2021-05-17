import { useQuery } from "react-query"
import { getHomeData } from "../../data/queries"

// ************
// hook
// ************

export function useHomeData() {
	const {
		data: {
			data: { backgroundImage, profileImage, allProjects },
			isLoading,
		},
	} = useQuery("homeData", getHomeData)

	return {
		isLoading,
		backgroundImage,
		profileImage,
		allProjects,
	}
}
