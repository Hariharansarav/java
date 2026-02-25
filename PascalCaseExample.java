public class PascalCaseExample {
    public static void main(String[] args) {

        String str = "learn with programiz";
        String result = "";

        for (int i = 0; i < str.length(); i++) {

            if (i == 0) {
                result = result + Character.toUpperCase(str.charAt(i));
            }
            else if (str.charAt(i - 1) == ' ') {
                result = result + Character.toUpperCase(str.charAt(i));
            }
            else if (str.charAt(i) != ' ') {
                result = result + Character.toLowerCase(str.charAt(i));
            }
        }

        System.out.println(result);
    }
}