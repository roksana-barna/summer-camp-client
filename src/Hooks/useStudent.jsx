import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useStudent = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;