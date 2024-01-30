public class CalculoSalario {
    public static void main(String[] args) {
        double valorBruto = 5500.00;
        double adicional = 250;
        double salario;

        if (valorBruto >= 0 && valorBruto <= 1100.00) {
            double imposto = valorBruto * 0.05;
            valorBruto -= imposto;
        } else if (valorBruto >= 1100.01 && valorBruto <= 2500.00) {
            double imposto = valorBruto * 0.10;
            valorBruto -= imposto;
        } else if (valorBruto > 2500.00) {
            double imposto = valorBruto * 0.15;
            valorBruto -= imposto;
        }

        salario = valorBruto + adicional;

        System.out.println(salario);
    }
}